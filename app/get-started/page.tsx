import Link from "next/link";
import Image from "next/image";
import { BookOpen, Github, Linkedin } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900 overflow-x-hidden flex flex-col">

      {/* --- Navigation --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
             <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">CodeFXR</span>
          </Link>
          
          {/* Right Side Links (No Applications Icon) */}
          <div className="flex items-center gap-4 md:gap-6 text-slate-400">
            <Link 
              href="https://github.com/CodeFXR/codefxr.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto pt-32 px-6 pb-20 flex-1 w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-400">Get up and running</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Choose your tool below. Copy the command to install, or view the full documentation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. CLI-Studio */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo1.png" alt="CLI-Studio Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">CLI-Studio</h2>
                <span className="inline-block px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20 mb-6">v1.0.0 Stable</span>
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <div className="h-5 mb-2 text-sm text-slate-400">Run auto-installer:</div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-xs text-white mb-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700 flex items-center h-[52px]">
                  curl -fsSL https://cso.codefxr.com/install | bash
                </div>
                <Link href="/docs/cli-studio">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Crolendar */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo5.png" alt="Crolendar Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Crolendar</h2>
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <div className="h-5 mb-2 text-sm text-slate-400"></div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-sm text-slate-500 select-none mb-6 flex items-center h-[52px]">
                  go run .
                </div>
                <Link href="/docs/crolendar">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. LXM */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo3.png" alt="LXM Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">LXM</h2>
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <div className="h-5 mb-2 text-sm text-slate-400"></div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-sm text-slate-500 select-none mb-6 flex items-center h-[52px]">
                  cargo build --release
                </div>
                <Link href="/docs/lxm">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Info
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 4. Sentinel */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo4.png" alt="Sentinel Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Sentinel</h2>
                <span className="inline-block px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20 mb-6">v1.0 Stable</span>
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <div className="h-5 mb-2 text-sm text-slate-400">Run auto-installer:</div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-xs text-white mb-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700 flex items-center h-[52px]">
                  curl -fsSL https://snl.codefxr.com/install | bash
                </div>
                <Link href="/docs/sentinel">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-400 hover:text-slate-950 hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 5. Synapxis */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
                <Image src="/logo2.png" alt="Synapxis Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Synapxis</h2>
                <span className="inline-block px-2 py-1 rounded bg-teal-500/10 text-teal-400 text-xs border border-teal-500/20 mb-6">v1.0 Stable</span>
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <div className="h-5 mb-2 text-sm text-slate-400">Run auto-installer:</div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-xs text-white mb-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700 flex items-center h-[52px]">
                  curl -fsSL https://snx.codefxr.com/install | bash
                </div>
                <Link href="/docs/synapxis">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" /> Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 6. Toxic */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]">
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo6.png" alt="Toxic Logo" width={140} height={140} className="object-contain" />
            </div>
            <div className="relative z-10 flex flex-col h-full w-full">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Toxic</h2>
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">In Development</span>
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <div className="h-5 mb-2 text-sm text-slate-400"></div>
                <div className="bg-slate-950 rounded-lg px-4 border border-slate-800 font-mono text-sm text-slate-500 select-none mb-6 flex items-center h-[52px]">
                  ./run.sh
                </div>
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

      {/* --- Footer --- */}
      <footer className="py-10 border-t border-slate-900 bg-slate-950 flex flex-col items-center justify-center gap-6 mt-auto">
        <div className="flex items-center gap-6 text-slate-500">
          <Link href="/about" className="hover:text-white transition-colors text-sm font-medium">About</Link>
          <Link href="https://github.com/CodeFXR/codefxr.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/codefxr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} CodeFXR. All rights reserved.</p>
      </footer>

    </main>
  );
}