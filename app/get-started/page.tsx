import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900 overflow-x-hidden flex flex-col justify-between relative">
      {/* Background subtle grid */}
      <div className="fixed inset-0 bg-grid-slate opacity-70 pointer-events-none" />

      {/* --- Top Navigation (matches main page) --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <Image src="/roco-full.png" alt="CodeFXR Logo" fill className="object-contain" priority />
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

      {/* --- Main Content --- */}
      <div className="max-w-6xl mx-auto pt-36 px-6 pb-20 flex-1 w-full z-10">
        <div className="mb-12 text-center">
          <h1 className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Choose your tool. Copy the command, or view the full documentation.
          </h1>
        </div>

        {/* --- Baseball Cards Grid (Alphabetical: CLI-Studio, Sentinel / Crolendar, Synapxis) --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1. CLI-Studio */}
          <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_35px_-5px_rgba(34,197,94,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
              <Image src="/logo1.png" alt="CLI-Studio Logo" width={150} height={150} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">CLI-Studio</h2>
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/25 mb-4">
                  v1.4 Stable
                </span>
              </div>
              <div className="flex-1" />
              <div className="mt-auto">
                <div className="text-xs text-slate-400 mb-2 font-mono">Run auto-installer:</div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-xs text-white mb-6 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center h-[52px] select-all">
                  curl -fsSL https://cso.codefxr.com/install | bash
                </div>
                <Link href="/docs/cli-studio">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:shadow-lg cursor-pointer">
                    Documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Sentinel */}
          <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-sky-500/50 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
              <Image src="/sentinel.png" alt="Sentinel Logo" width={150} height={150} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Sentinel</h2>
                <span className="inline-block px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-wide border border-sky-500/25 mb-4">
                  v2.0 Stable
                </span>
              </div>
              <div className="flex-1" />
              <div className="mt-auto">
                <div className="text-xs text-slate-400 mb-2 font-mono">Run auto-installer:</div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-xs text-white mb-6 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center h-[52px] select-all">
                  curl -fsSL https://snl.codefxr.com/install | bash
                </div>
                <Link href="/docs/sentinel">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center hover:bg-sky-400 hover:text-slate-950 hover:shadow-lg cursor-pointer">
                    Documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Crolendar */}
          <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-purple-500/50 hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
              <Image src="/logo5.png" alt="Crolendar Logo" width={150} height={150} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Crolendar</h2>
                <span className="inline-block px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide border border-purple-500/25 mb-4">
                  In Development
                </span>
              </div>
              <div className="flex-1" />
              <div className="mt-auto">
                <Link href="/docs/crolendar">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center hover:bg-purple-500 hover:text-white hover:shadow-lg cursor-pointer">
                    Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 4. Synapxis */}
          <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-amber-500/50 hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
              <Image src="/logo2.png" alt="Synapxis Logo" width={150} height={150} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Synapxis</h2>
                <span className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide border border-amber-500/25 mb-4">
                  In Development
                </span>
              </div>
              <div className="flex-1" />
              <div className="mt-auto">
                <Link href="/docs/synapxis">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:shadow-lg cursor-pointer">
                    Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer (matches main page) --- */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 rounded overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Image src="/roco-head.png" alt="CodeFXR Logo" fill className="object-contain p-0.5" />
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
