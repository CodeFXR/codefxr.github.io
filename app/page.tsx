import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import ParticleNetwork from "./components/ParticleNetwork";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900 overflow-x-hidden flex flex-col justify-between relative">
      {/* Interactive connected terminal symbols canvas background */}
      <ParticleNetwork />

      {/* --- Navigation --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain" priority />
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">
                CodeFXR
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-slate-400">
            <Link
              href="https://github.com/CodeFXR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Organization"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-36 pb-20 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
          Open Source tools for Linux
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
          Software made simple for everyday workflows.
        </p>

        {/* --- Buttons --- */}
        <div className="flex gap-4">
          <Link href="/get-started">
            <button className="px-8 py-3 rounded-lg font-bold bg-white text-slate-950 hover:bg-green-400 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(74,222,128,0.5)] cursor-pointer">
              Get Started
            </button>
          </Link>
          <Link href="/docs">
            <button className="px-8 py-3 rounded-lg font-bold border border-slate-700 hover:border-blue-500 text-white hover:bg-slate-900 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] cursor-pointer">
              View Documentation
            </button>
          </Link>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 rounded overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain p-0.5" />
            </div>
            <span className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} CodeFXR. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-500">
            <Link
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-[#5865F2] transition-colors"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/codefxr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
