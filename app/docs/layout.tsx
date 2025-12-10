import Link from "next/link";
import Image from "next/image";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900">
      
      {/* --- 1. TOP NAVIGATION (Same as Get Started) --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          
          {/* Logo -> Links to Home */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
             <Image 
               src="/logo.png" 
               alt="CodeFXR Logo" 
               fill 
               className="object-contain"
             />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">CodeFXR</span>
          </Link>

          {/* Right Side Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link 
              href="https://github.com/CodeFXR/codefxr.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* --- 2. MAIN LAYOUT CONTAINER --- */}
      {/* pt-24 pushes content down so it's not hidden behind the fixed header */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-24">
        
        {/* --- 3. SIDEBAR --- */}
        {/* sticky top-24 makes it stay on screen while you scroll the content */}
        <aside className="w-full md:w-64 shrink-0 md:border-r border-slate-800 md:min-h-[calc(100vh-6rem)] px-6 py-8 bg-slate-950 md:sticky md:top-24 self-start">
          
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

          {/* Other Apps (Now Clickable) */}
          <h3 className="font-bold text-slate-500 mb-4 px-2 uppercase text-xs tracking-wider">In Development</h3>
          <ul className="space-y-1 ml-2">
            <li>
                <Link href="/docs/cli-studio" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                    CLI-Studio
                </Link>
            </li>
            <li>
                <Link href="/docs/lxm" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                    LXM
                </Link>
            </li>
          </ul>
        </aside>

        {/* --- 4. MAIN CONTENT AREA --- */}
        <main className="flex-1 px-8 py-8 min-h-screen">
          {children}
        </main>

      </div>
    </div>
  );
}