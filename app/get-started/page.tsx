import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900 overflow-x-hidden">

      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
             <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">CodeFXR</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link href="https://github.com/CodeFXR/codefxr.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-32 px-6 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-400">Get up and running</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Choose your tool below. Copy the command to install, or view the full documentation.</p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. CLI-Studio (Green) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo1.png" alt="Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">CLI-Studio</h2>
              <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm mb-6 text-slate-500 select-none">
                python cli-studio.py
              </div>
              <div className="mt-auto">
                <Link href="/docs/cli-studio">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Crolendar (Purple) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo5.png" alt="Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">Crolendar</h2>
              <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm mb-6 text-slate-500 select-none">
                go run .
              </div>
              <div className="mt-auto">
                <Link href="/docs/crolendar">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. LXM (Blue) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo3.png" alt="Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">LXM</h2>
              <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm mb-6 text-slate-500 select-none">
                cargo build --release
              </div>
              <div className="mt-auto">
                 <Link href="/docs/lxm">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 4. Sentinel (Silver) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo4.png" alt="Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">Sentinel</h2>
              <span className="inline-block px-2 py-1 rounded bg-teal-500/10 text-teal-400 text-xs border border-teal-500/20 mb-6">v1.0 Stable</span>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-xs text-white mb-8 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700">
                curl -fsSL https://snl.codefxr.com/install | bash
              </div>
              <div className="mt-auto">
                <Link href="/docs/sentinel">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-400 hover:text-slate-950 hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 5. Synapxis (Amber) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
                <Image src="/logo2.png" alt="Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">Synapxis</h2>
              <span className="inline-block px-2 py-1 rounded bg-teal-500/10 text-teal-400 text-xs border border-teal-500/20 mb-6">v1.0 Stable</span>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-xs text-white mb-8 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700">
                curl -fsSL https://snx.codefxr.com/install | bash
              </div>
              <div className="mt-auto">
                <Link href="/docs/synapxis">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 6. Toxic (Red) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo6.png" alt="Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">Toxic</h2>
              <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm mb-6 text-slate-500 select-none">
                ./run.sh
              </div>
              <div className="mt-auto">
                <Link href="/docs/toxic">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}