'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Helper to check if a section is active
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
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
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link href="https://github.com/CodeFXR/codefxr.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-24">
        
        {/* --- SMART SIDEBAR --- */}
        <aside className="w-full md:w-64 shrink-0 md:border-r border-slate-800 md:min-h-[calc(100vh-6rem)] px-6 py-8 bg-slate-950 md:sticky md:top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
          
          <div className="mb-6">
            <Link href="/docs" className={`text-sm font-bold ${pathname === '/docs' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>
              Documentation Hub
            </Link>
          </div>

          {/* 1. SYNAPXIS SECTION (Teal) */}
          <div className="mb-6">
            <Link href="/docs/synapxis" className="flex items-center justify-between group mb-2">
                <span className={`font-bold text-sm uppercase tracking-wider ${isActive('/docs/synapxis') ? 'text-teal-400' : 'text-slate-500 group-hover:text-teal-400 transition-colors'}`}>
                    Synapxis
                </span>
                {isActive('/docs/synapxis') && <ChevronDown className="w-4 h-4 text-teal-400" />}
            </Link>
            
            {isActive('/docs/synapxis') && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-left-2 duration-200">
                    <li><Link href="/docs/synapxis#features" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px]">Features</Link></li>
                    <li><Link href="/docs/synapxis#prerequisites" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px]">Prerequisites</Link></li>
                    <li><Link href="/docs/synapxis#installation" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px]">Installation</Link></li>
                    <li><Link href="/docs/synapxis#troubleshooting" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-teal-400 hover:border-l hover:border-teal-400 -ml-[1px]">Troubleshooting</Link></li>
                </ul>
            )}
          </div>

          {/* 2. SENTINEL SECTION (Silver/White) */}
          <div className="mb-6">
            <Link href="/docs/sentinel" className="flex items-center justify-between group mb-2">
                {/* Silver Title */}
                <span className={`font-bold text-sm uppercase tracking-wider ${isActive('/docs/sentinel') ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 transition-colors'}`}>
                    Sentinel
                </span>
                {isActive('/docs/sentinel') && <ChevronDown className="w-4 h-4 text-slate-200" />}
            </Link>

            {isActive('/docs/sentinel') && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-left-2 duration-200">
                    {/* White Hover Effects */}
                    <li><Link href="/docs/sentinel#features" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Features</Link></li>
                    <li><Link href="/docs/sentinel#prerequisites" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Prerequisites</Link></li>
                    <li><Link href="/docs/sentinel#installation" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Installation</Link></li>
                    <li><Link href="/docs/sentinel#usage" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Usage</Link></li>
                    <li><Link href="/docs/sentinel#troubleshooting" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Troubleshooting</Link></li>
                </ul>
            )}
          </div>

          {/* 3. IN DEVELOPMENT SECTION */}
          <div>
            <span className="font-bold text-sm uppercase tracking-wider text-slate-600 block mb-2">In Development</span>
            <ul className="space-y-1 ml-2">
                <li><Link href="/docs/cli-studio" className={`block px-4 py-1.5 text-sm ${isActive('/docs/cli-studio') ? 'text-green-400' : 'text-slate-400 hover:text-white'}`}>CLI-Studio</Link></li>
                <li><Link href="/docs/lxm" className={`block px-4 py-1.5 text-sm ${isActive('/docs/lxm') ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>LXM</Link></li>
            </ul>
          </div>

        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 px-8 py-8 min-h-screen min-w-0">
          {children}
        </main>

      </div>
    </div>
  );
}