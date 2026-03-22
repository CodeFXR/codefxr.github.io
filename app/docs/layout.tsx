'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Github, LayoutGrid } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // State to manage which sidebar menus are open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Automatically open the section for the page you are currently viewing
  useEffect(() => {
    const apps =['cli-studio', 'crolendar', 'lxm', 'sentinel', 'synapxis', 'toxic'];
    const currentApp = apps.find(app => pathname.includes(app));
    if (currentApp) {
        setOpenSections(prev => ({ ...prev, [currentApp]: true }));
    }
  }, [pathname]);

  const toggleSection = (app: string) => {
    setOpenSections(prev => ({ ...prev, [app]: !prev[app] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
             <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">CodeFXR</span>
          </Link>
          
          {/* Right Side Links (Visible on Mobile) */}
          <div className="flex items-center gap-4 md:gap-6 text-slate-400">
            <Link 
              href="/#products" 
              className="hover:text-green-400 transition-colors"
              aria-label="Applications"
            >
              <LayoutGrid className="w-5 h-5" />
            </Link>
            <Link 
              href="https://github.com/CodeFXR/codefxr.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-24">
        
        {/* --- COLLAPSIBLE SIDEBAR --- */}
        <aside className="w-full md:w-64 shrink-0 md:border-r border-slate-800 md:min-h-[calc(100vh-6rem)] px-6 py-8 bg-slate-950 md:sticky md:top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
          
          <div className="mb-8">
            <Link href="/docs" className={`text-sm font-bold ${pathname === '/docs' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>
              Documentation Hub
            </Link>
          </div>

          {/* 1. CLI-STUDIO (Green) */}
          <div className="mb-4">
            <button onClick={() => toggleSection('cli-studio')} className="w-full flex items-center justify-between group mb-2 cursor-pointer">
                <span className={`font-bold text-sm uppercase tracking-wider ${openSections['cli-studio'] ? 'text-green-400' : 'text-slate-500 group-hover:text-green-400 transition-colors'}`}>
                    CLI-Studio
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections['cli-studio'] ? 'text-green-400 rotate-180' : 'text-slate-600'}`} />
            </button>
            {openSections['cli-studio'] && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                    <li><Link href="/docs/cli-studio" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Overview</Link></li>
                    <li><Link href="/docs/cli-studio#features" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Features</Link></li>
                    <li><Link href="/docs/cli-studio#prerequisites" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Prerequisites</Link></li>
                    <li><Link href="/docs/cli-studio#installation" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Installation</Link></li>
                    <li><Link href="/docs/cli-studio#usage" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Usage</Link></li>
                    <li><Link href="/docs/cli-studio#capabilities" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Capabilities</Link></li>
                    <li><Link href="/docs/cli-studio#troubleshooting" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Troubleshooting</Link></li>
                </ul>
            )}
          </div>

          {/* 2. CROLENDAR (Purple) */}
          <div className="mb-4">
            <button onClick={() => toggleSection('crolendar')} className="w-full flex items-center justify-between group mb-2 cursor-pointer">
                <span className={`font-bold text-sm uppercase tracking-wider ${openSections['crolendar'] ? 'text-purple-400' : 'text-slate-500 group-hover:text-purple-400 transition-colors'}`}>
                    Crolendar
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections['crolendar'] ? 'text-purple-400 rotate-180' : 'text-slate-600'}`} />
            </button>
            {openSections['crolendar'] && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                    <li><Link href="/docs/crolendar" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Overview</Link></li>
                </ul>
            )}
          </div>

          {/* 3. LXM (Blue) */}
          <div className="mb-4">
            <button onClick={() => toggleSection('lxm')} className="w-full flex items-center justify-between group mb-2 cursor-pointer">
                <span className={`font-bold text-sm uppercase tracking-wider ${openSections['lxm'] ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400 transition-colors'}`}>
                    LXM
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections['lxm'] ? 'text-blue-400 rotate-180' : 'text-slate-600'}`} />
            </button>
            {openSections['lxm'] && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                    <li><Link href="/docs/lxm" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Overview</Link></li>
                </ul>
            )}
          </div>

          {/* 4. SENTINEL (Silver/White) */}
          <div className="mb-4">
            <button onClick={() => toggleSection('sentinel')} className="w-full flex items-center justify-between group mb-2 cursor-pointer">
                <span className={`font-bold text-sm uppercase tracking-wider ${openSections['sentinel'] ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 transition-colors'}`}>
                    Sentinel
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections['sentinel'] ? 'text-slate-200 rotate-180' : 'text-slate-600'}`} />
            </button>
            {openSections['sentinel'] && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                    <li><Link href="/docs/sentinel" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Overview</Link></li>
                    <li><Link href="/docs/sentinel#features" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Features</Link></li>
                    <li><Link href="/docs/sentinel#prerequisites" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Prerequisites</Link></li>
                    <li><Link href="/docs/sentinel#installation" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Installation</Link></li>
                    <li><Link href="/docs/sentinel#usage" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Usage</Link></li>
                    <li><Link href="/docs/sentinel#troubleshooting" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Troubleshooting</Link></li>
                </ul>
            )}
          </div>

          {/* 5. SYNAPXIS (Amber) */}
          <div className="mb-4">
            <button onClick={() => toggleSection('synapxis')} className="w-full flex items-center justify-between group mb-2 cursor-pointer">
                <span className={`font-bold text-sm uppercase tracking-wider ${openSections['synapxis'] ? 'text-orange-400' : 'text-slate-500 group-hover:text-orange-400 transition-colors'}`}>
                    Synapxis
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections['synapxis'] ? 'text-orange-400 rotate-180' : 'text-slate-600'}`} />
            </button>
            {openSections['synapxis'] && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                    <li><Link href="/docs/synapxis" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-orange-400 hover:border-l hover:border-orange-400 -ml-[1px]">Overview</Link></li>
                    <li><Link href="/docs/synapxis#features" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-orange-400 hover:border-l hover:border-orange-400 -ml-[1px]">Features</Link></li>
                    <li><Link href="/docs/synapxis#prerequisites" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-orange-400 hover:border-l hover:border-orange-400 -ml-[1px]">Prerequisites</Link></li>
                    <li><Link href="/docs/synapxis#installation" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-orange-400 hover:border-l hover:border-orange-400 -ml-[1px]">Installation</Link></li>
                    <li><Link href="/docs/synapxis#troubleshooting" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-orange-400 hover:border-l hover:border-orange-400 -ml-[1px]">Troubleshooting</Link></li>
                </ul>
            )}
          </div>

          {/* 6. TOXIC (Red) */}
          <div className="mb-4">
            <button onClick={() => toggleSection('toxic')} className="w-full flex items-center justify-between group mb-2 cursor-pointer">
                <span className={`font-bold text-sm uppercase tracking-wider ${openSections['toxic'] ? 'text-red-400' : 'text-slate-500 group-hover:text-red-400 transition-colors'}`}>
                    Toxic
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections['toxic'] ? 'text-red-400 rotate-180' : 'text-slate-600'}`} />
            </button>
            {openSections['toxic'] && (
                <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                    <li><Link href="/docs/toxic" className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]">Overview</Link></li>
                </ul>
            )}
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