import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function DocsHome() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-6">Documentation Hub</h1>
      <p className="text-xl text-slate-400 mb-12 leading-relaxed">
        Browse detailed guides, references, and configuration manuals for the CodeFXR ecosystem.
      </p>

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