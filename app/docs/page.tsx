import Link from "next/link";
import { HelpCircle, ArrowRight, Book } from "lucide-react";

export default function DocsHome() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-6">Documentation Hub</h1>
      <p className="text-xl text-slate-400 mb-12 leading-relaxed">
        Browse detailed guides, references, and configuration manuals for the CodeFXR ecosystem.
      </p>

      {/* App List */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
            <Book className="w-5 h-5 text-blue-400" /> Applications
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
            
            <Link href="/docs/cli-studio" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-green-500/50 transition-all group">
                <h3 className="font-bold text-slate-300 group-hover:text-green-400">CLI-Studio</h3>
                <p className="text-sm text-slate-500">Media manipulation</p>
            </Link>

            <Link href="/docs/crolendar" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-purple-500/50 transition-all group">
                <h3 className="font-bold text-slate-300 group-hover:text-purple-400">Crolendar</h3>
                <p className="text-sm text-slate-500">Cron visualization</p>
            </Link>

            <Link href="/docs/lxm" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-blue-500/50 transition-all group">
                <h3 className="font-bold text-slate-300 group-hover:text-blue-400">LXM</h3>
                <p className="text-sm text-slate-500">File manager</p>
            </Link>

            <Link href="/docs/sentinel" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-white/50 transition-all group">
                <h3 className="font-bold text-slate-300 group-hover:text-white">Sentinel</h3>
                <p className="text-sm text-slate-500">Identity manager</p>
            </Link>

            <Link href="/docs/synapxis" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-orange-500/50 transition-all group">
                <h3 className="font-bold text-slate-300 group-hover:text-orange-400">Synapxis</h3>
                <p className="text-sm text-slate-500">Knowledge graph</p>
            </Link>

            <Link href="/docs/toxic" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-red-500/50 transition-all group">
                <h3 className="font-bold text-slate-300 group-hover:text-red-400">Toxic</h3>
                <p className="text-sm text-slate-500">VirusTotal TUI</p>
            </Link>

        </div>
      </div>

      {/* Need Help */}
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