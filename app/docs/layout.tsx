import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20 max-w-7xl mx-auto">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-full md:w-64 shrink-0 border-r border-slate-800 md:min-h-screen px-6 py-8 bg-slate-950">
        
        <div className="mb-8">
            <Link href="/get-started" className="flex items-center text-sm text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Get Started
            </Link>
        </div>

        {/* Synapxis Menu */}
        <h3 className="font-bold text-teal-400 mb-4 px-2 uppercase text-xs tracking-wider">Synapxis</h3>
        <ul className="space-y-1 mb-8 border-l border-slate-800 ml-2">
          <li>
            <Link href="/docs/synapxis#features" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px] transition-all">
              Features
            </Link>
          </li>
          <li>
            <Link href="/docs/synapxis#prerequisites" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px] transition-all">
              Prerequisites
            </Link>
          </li>
          <li>
            <Link href="/docs/synapxis#installation" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px] transition-all">
              Installation
            </Link>
          </li>
          <li>
            <Link href="/docs/synapxis#troubleshooting" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px] transition-all">
              Troubleshooting
            </Link>
          </li>
        </ul>

        {/* Other Apps (Dimmed) */}
        <h3 className="font-bold text-slate-600 mb-4 px-2 uppercase text-xs tracking-wider">Coming Soon</h3>
        <ul className="space-y-1 ml-2">
          <li><span className="block px-4 py-1.5 text-sm text-slate-600 cursor-not-allowed">CLI-Studio</span></li>
          <li><span className="block px-4 py-1.5 text-sm text-slate-600 cursor-not-allowed">LXM</span></li>
        </ul>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 px-8 py-8">
        {children}
      </div>

    </div>
  );
}