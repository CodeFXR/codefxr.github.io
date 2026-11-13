'use client';

import { useEffect, useRef } from 'react';

const TERMINAL_GLYPHS = [
  '>', '<', '_', '$', '#', '~', '/', '\\', '|', '&',
  '%', '*', ';', ':', '!', '?', '@', '^', '+', '=',
  '{', '}', '[', ']', '(', ')', '&&', '||', '>>', '<<',
  '->', '!=', '==', './', '0x'
];

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Higher density of floating terminal glyphs
    const numSymbols = Math.min(Math.floor((width * height) / 10000), 115);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      char: string;
      size: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < numSymbols; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        char: TERMINAL_GLYPHS[Math.floor(Math.random() * TERMINAL_GLYPHS.length)],
        size: Math.floor(Math.random() * 4) + 13, // 13px - 16px font
        opacity: Math.random() * 0.25 + 0.65, // Bright, distinct glyphs (0.65 - 0.90)
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connection lines with high clarity and contrast
      const connectionDistance = 145;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connect nearby terminal glyphs
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Clearly visible cyan/sky blue connecting lines
            const alpha = 0.45 * (1 - dist / connectionDistance);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor when within radius
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          // Bright emerald green laser connection to cursor
          const mouseAlpha = 0.8 * (1 - distMouse / mouse.radius);
          ctx.strokeStyle = `rgba(52, 211, 153, ${mouseAlpha})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Smooth interactive steering
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x += (dxMouse / distMouse) * force * 1.4;
          p1.y += (dyMouse / distMouse) * force * 1.4;
        }
      }

      // 2. Render each terminal glyph in monospace
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas boundaries
        if (p.x < 15 || p.x > width - 15) p.vx *= -1;
        if (p.y < 15 || p.y > height - 15) p.vy *= -1;

        ctx.font = `600 ${p.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`;
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
