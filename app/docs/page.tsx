import Link from "next/link";
import { HelpCircle, ArrowRight, Book } from "lucide-react";

export default function DocsHome() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-6">Documentation Hub</h1>
      <p className="text-xl text-slate-400 mb-12 leading-relaxed">
        Browse detailed guides, API references, and configuration manuals for the CodeFXR ecosystem.
      </p>

      {/* App List Grid */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
            <Book className="w-5 h-5 text-blue-400" /> Applications
        </h2>
        
        {/* 3 Column Grid Alphabetical */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. CLI-Studio */}
            <Link href="/docs/cli-studio" className="block p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-green-500/50 hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.15)] transition-all group hover:-translate-y-1">
                <span className="inline-block px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] uppercase font-bold border border-green-500/20 mb-3">v1.0 Stable</span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-green-400 transition-colors mb-2">CLI-Studio</h3>
                <p className="text-sm text-slate-500">Media manipulation</p>
            </Link>

            {/* 2. Crolendar */}
            <Link href="/docs/crolendar" className="block p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-purple-500/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] transition-all group hover:-translate-y-1">
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold border border-yellow-500/20 mb-3">In Development</span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-purple-400 transition-colors mb-2">Crolendar</h3>
                <p className="text-sm text-slate-500">Cron visualization</p>
            </Link>

            {/* 3. LXM */}
            <Link href="/docs/lxm" className="block p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)] transition-all group hover:-translate-y-1">
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold border border-yellow-500/20 mb-3">In Development</span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors mb-2">LXM</h3>
                <p className="text-sm text-slate-500">Async file manager</p>
            </Link>

            {/* 4. Sentinel */}
            <Link href="/docs/sentinel" className="block p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-white/50 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] transition-all group hover:-translate-y-1">
                <span className="inline-block px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-[10px] uppercase font-bold border border-blue-500/20 mb-3">v1.0 Stable</span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors mb-2">Sentinel</h3>
                <p className="text-sm text-slate-500">Identity manager</p>
            </Link>

            {/* 5. Synapxis */}
            <Link href="/docs/synapxis" className="block p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-orange-500/50 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.15)] transition-all group hover:-translate-y-1">
                <span className="inline-block px-2 py-1 rounded bg-orange-500/10 text-orange-400 text-[10px] uppercase font-bold border border-orange-500/20 mb-3">v1.0 Stable</span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-orange-400 transition-colors mb-2">Synapxis</h3>
                <p className="text-sm text-slate-500">Knowledge graph</p>
            </Link>

            {/* 6. Toxic */}
            <Link href="/docs/toxic" className="block p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-red-500/50 hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.15)] transition-all group hover:-translate-y-1">
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold border border-yellow-500/20 mb-3">In Development</span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-red-400 transition-colors mb-2">Toxic</h3>
                <p className="text-sm text-slate-500">VirusTotal TUI</p>
            </Link>

        </div>
      </div>

      {/* Need Help Section */}
      <div className="bg-slate-900/30 p-8 rounded-xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-purple-400" /> Need Help?
        </h2>
        <p className="text-slate-400 mb-6 leading-relaxed">
            If you encounter bugs or have feature requests, please open an issue on our GitHub repositories.
        </p>
        
        <Link 
            href="https://github.com/CodeFXR" 
            target="_blank" 
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700"
        >
            Visit GitHub Organization <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

    </div>
  );
}