import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          {/* Gradient Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-400">
              Get up and running
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose your tool below. Copy the command to install, or view the full documentation for configuration details.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 1. CLI-Studio Card (Green Theme) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
            {/* Watermark Logo */}
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo1.png" alt="CLI-Studio Logo" width={140} height={140} className="object-contain" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">CLI▶Studio</h2>
              <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">
                In Development
              </span>
              
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm mb-6 text-slate-500 select-none">
                $ pip install cli-studio
              </div>

              <div className="mt-auto">
                <button disabled className="w-full py-2.5 rounded-lg border border-slate-800 text-slate-500 cursor-not-allowed text-sm font-medium">
                  Docs Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* 2. Synapxis Card (Amber Theme - Active) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]">
            {/* Watermark Logo */}
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
                <Image src="/logo2.png" alt="Synapxis Logo" width={140} height={140} className="object-contain" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">Synapxis</h2>
              <span className="inline-block px-2 py-1 rounded bg-teal-500/10 text-teal-400 text-xs border border-teal-500/20 mb-6">
                v1.0 Stable
              </span>
              
              <div className="mb-2 text-sm text-slate-400">Run auto-installer:</div>
              {/* Command text is White */}
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-xs text-white mb-8 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-slate-700">
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/CodeFXR/Synapxis/refs/heads/Synapxis/install.sh)"
              </div>

              <div className="mt-auto">
                <Link href="/docs/synapxis">
                  {/* Button is White, lights up Amber */}
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white hover:shadow-lg">
                    <BookOpen className="w-4 h-4" />
                    Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. LXM Card (Blue Theme) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
            {/* Watermark Logo */}
            <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0">
               <Image src="/logo3.png" alt="LXM Logo" width={140} height={140} className="object-contain" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">LXM</h2>
              <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20 mb-6">
                In Development
              </span>
              
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm mb-6 text-slate-500 select-none">
                $ cargo install lxm
              </div>

              <div className="mt-auto">
                 <button disabled className="w-full py-2.5 rounded-lg border border-slate-800 text-slate-500 cursor-not-allowed text-sm font-medium">
                  Docs Coming Soon
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}