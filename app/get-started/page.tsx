import Link from "next/link";
import { ArrowLeft, BookOpen, Terminal, Share2, Layers, Check } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get up and running
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose your tool below. Copy the command to install, or view the full documentation for configuration details.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 1. CLI-Studio Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <Terminal className="w-24 h-24 text-blue-500/10 group-hover:text-blue-500/20 transition-all" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">CLI▶Studio</h2>
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

          {/* 2. Synapxis Card (Active) */}
          <div className="bg-slate-900/50 border border-teal-500/30 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-teal-400/50 transition-all shadow-[0_0_30px_-10px_rgba(20,184,166,0.1)]">
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <Share2 className="w-24 h-24 text-teal-500/10 group-hover:text-teal-500/20 transition-all" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-teal-400 mb-2">Synapxis</h2>
              <span className="inline-block px-2 py-1 rounded bg-teal-500/10 text-teal-400 text-xs border border-teal-500/20 mb-6">
                v1.0 Stable
              </span>
              
              <div className="mb-2 text-sm text-slate-400">Run auto-installer:</div>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-xs text-teal-300 mb-8 overflow-x-auto whitespace-nowrap">
                /bin/bash -c "$(curl -fsSL .../install.sh)"
              </div>

              <div className="mt-auto">
                <Link href="/docs/synapxis">
                  <button className="w-full py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Full Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. LXM Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-green-500/50 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <Layers className="w-24 h-24 text-green-500/10 group-hover:text-green-500/20 transition-all" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-green-400 mb-2">LXM</h2>
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