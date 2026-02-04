import Link from "next/link";
import { Share2, Terminal, Layers, ArrowRight, ShieldCheck } from "lucide-react";

export default function DocsHome() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-6">Documentation Hub</h1>
      <p className="text-xl text-slate-400 mb-12 leading-relaxed">
        Welcome to the CodeFXR documentation. Select an application below to view detailed guides, 
        configuration options, and troubleshooting steps.
      </p>

      <div className="grid gap-6">
        
        {/* Synapxis Card (Active) */}
        <Link href="/docs/synapxis" className="group block">
          <div className="bg-slate-900/50 border border-teal-500/30 rounded-xl p-8 hover:border-teal-400/50 hover:bg-slate-900 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                  <Share2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">Synapxis</h2>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-teal-400 transition-colors" />
            </div>
            <p className="text-slate-400 mb-4">
              Terminal-based knowledge management with graph visualization. Learn about the hybrid Rust/Python engine, Wikilinks, and zettelkasten workflows.
            </p>
            <span className="text-xs font-mono text-teal-500 border border-teal-500/20 px-2 py-1 rounded">v1.0 Stable</span>
          </div>
        </Link>

        {/* Sentinel Card (Active - NEW) */}
        <Link href="/docs/sentinel" className="group block">
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-white/50 hover:bg-slate-900 transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-800 text-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">Sentinel</h2>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
            </div>
            <p className="text-slate-400 mb-4">
              Enterprise Identity Manager for Linux. Visual dashboard for DoD Smart Cards, certificate validation, and digital signing.
            </p>
            <span className="text-xs font-mono text-slate-300 border border-slate-600 px-2 py-1 rounded">v1.0 Stable</span>
          </div>
        </Link>

        {/* CLI-Studio (Coming Soon) */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-8 opacity-75">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-slate-800 text-slate-500">
              <Terminal className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-500">CLI-Studio</h2>
          </div>
          <p className="text-slate-500 mb-2">
            Visual interface for command-line media manipulation.
          </p>
          <span className="text-xs font-mono text-yellow-600 border border-yellow-600/20 px-2 py-1 rounded">Documentation Coming Soon</span>
        </div>

        {/* LXM (Coming Soon) */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-8 opacity-75">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-slate-800 text-slate-500">
              <Layers className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-500">LXM</h2>
          </div>
          <p className="text-slate-500 mb-2">
            Linux manual pages search and command builder.
          </p>
          <span className="text-xs font-mono text-yellow-600 border border-yellow-600/20 px-2 py-1 rounded">Documentation Coming Soon</span>
        </div>

      </div>
    </div>
  );
}