import Link from "next/link";
import { HelpCircle, ArrowRight, Book, Terminal } from "lucide-react";

export default function DocsHome() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-6">Documentation Hub</h1>
      <p className="text-xl text-slate-400 mb-12 leading-relaxed">
        Browse detailed guides, API references, and configuration manuals for the CodeFXR ecosystem.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Column 1: Application Guides */}
        <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
                <Book className="w-5 h-5 text-blue-400" /> Application Guides
            </h2>
            
            <div className="space-y-8">
                {/* CLI-Studio Group */}
                <div>
                    <Link href="/docs/cli-studio" className="text-lg font-semibold text-green-400 hover:underline mb-2 block">CLI-Studio</Link>
                    <ul className="space-y-2 text-sm text-slate-400 ml-1">
                        <li><Link href="/docs/cli-studio#features" className="hover:text-white transition-colors">• Batch Processing & Tools</Link></li>
                        <li><Link href="/docs/cli-studio#installation" className="hover:text-white transition-colors">• Installation Guide</Link></li>
                        <li><Link href="/docs/cli-studio#capabilities" className="hover:text-white transition-colors">• Media Capabilities</Link></li>
                    </ul>
                </div>

                {/* Sentinel Group */}
                <div>
                    <Link href="/docs/sentinel" className="text-lg font-semibold text-slate-200 hover:underline mb-2 block">Sentinel</Link>
                    <ul className="space-y-2 text-sm text-slate-400 ml-1">
                        <li><Link href="/docs/sentinel#features" className="hover:text-white transition-colors">• Diagnostics & Compliance</Link></li>
                        <li><Link href="/docs/sentinel#installation" className="hover:text-white transition-colors">• Setting up Smart Cards</Link></li>
                        <li><Link href="/docs/sentinel#troubleshooting" className="hover:text-white transition-colors">• Fixing Error 20 (DoD Certs)</Link></li>
                    </ul>
                </div>

                {/* Synapxis Group */}
                <div>
                    <Link href="/docs/synapxis" className="text-lg font-semibold text-orange-400 hover:underline mb-2 block">Synapxis</Link>
                    <ul className="space-y-2 text-sm text-slate-400 ml-1">
                        <li><Link href="/docs/synapxis#features" className="hover:text-white transition-colors">• Graph Visualization</Link></li>
                        <li><Link href="/docs/synapxis#installation" className="hover:text-white transition-colors">• Hybrid Engine Setup</Link></li>
                        <li><Link href="/docs/synapxis#troubleshooting" className="hover:text-white transition-colors">• Troubleshooting Render Issues</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Column 2: Ecosystem & Help */}
        <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
                <Terminal className="w-5 h-5 text-purple-400" /> Upcoming Tools
            </h2>
            
            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 mb-8">
                <h3 className="font-bold text-white mb-2">In Active Development</h3>
                <p className="text-sm text-slate-400 mb-4">
                    Documentation for these tools will be published upon v1.0 release.
                </p>
                <ul className="space-y-2 text-sm">
                    <li>
                        <Link href="/docs/crolendar" className="flex items-center justify-between text-slate-400 hover:text-purple-400 transition-colors">
                            Crolendar <ArrowRight className="w-3 h-3" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs/lxm" className="flex items-center justify-between text-slate-400 hover:text-blue-400 transition-colors">
                            LXM <ArrowRight className="w-3 h-3" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs/toxic" className="flex items-center justify-between text-slate-400 hover:text-red-400 transition-colors">
                            Toxic <ArrowRight className="w-3 h-3" />
                        </Link>
                    </li>
                </ul>
            </div>

            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
                <HelpCircle className="w-5 h-5 text-teal-400" /> Need Help?
            </h2>
            <p className="text-sm text-slate-400 mb-4">
                If you encounter bugs or have feature requests, please open an issue on our GitHub repositories.
            </p>
            <Link 
                href="https://github.com/CodeFXR" 
                target="_blank" 
                className="inline-flex items-center text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
            >
                Visit GitHub Organization <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>

      </div>
    </div>
  );
}