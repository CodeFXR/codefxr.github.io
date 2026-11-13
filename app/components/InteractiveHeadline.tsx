'use client';

import { useRef, useState } from 'react';

interface InteractiveHeadlineProps {
  text: string;
}

export default function InteractiveHeadline({ text }: InteractiveHeadlineProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    updatePosition(e.clientX, e.clientY);
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    updatePosition(e.clientX, e.clientY);
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-default select-none transition-colors duration-200 ${
        isHovered ? 'headline-spotlight' : 'text-white'
      }`}
    >
      {text}
    </span>
  );
}
