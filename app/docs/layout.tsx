'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const apps = ['cli-studio', 'sentinel', 'crolendar', 'synapxis'];
    const currentApp = apps.find(app => pathname.includes(app));
    if (currentApp) {
      setOpenSections(prev => ({ ...prev, [currentApp]: true }));
    }
  }, [pathname]);

  const toggleSection = (app: string) => {
    setOpenSections(prev => ({ ...prev, [app]: !prev[app] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-slate-700 selection:text-white">
      {/* --- Top Navigation --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain" priority />
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">
                CodeFXR
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-slate-400">
            <Link
              href="https://github.com/CodeFXR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Organization"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-24">
        {/* --- Sidebar --- */}
        <aside className="w-full md:w-64 shrink-0 md:border-r border-slate-800 md:min-h-[calc(100vh-6rem)] px-6 py-8 bg-slate-950 md:sticky md:top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto flex flex-col">
          <div className="mb-8">
            <Link
              href="/docs"
              className={`text-sm font-bold block transition-colors ${
                pathname === '/docs' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Documentation Hub
            </Link>
          </div>

          {/* 1. CLI-Studio */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('cli-studio')}
              className="w-full flex items-center justify-between group mb-2 cursor-pointer text-left"
            >
              <span
                className={`font-bold text-sm uppercase tracking-wider ${
                  openSections['cli-studio']
                    ? 'text-emerald-400'
                    : 'text-slate-500 group-hover:text-emerald-400 transition-colors'
                }`}
              >
                CLI-Studio
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSections['cli-studio'] ? 'text-emerald-400 rotate-180' : 'text-slate-600'
                }`}
              />
            </button>
            {openSections['cli-studio'] && (
              <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                <li>
                  <Link
                    href="/docs/cli-studio"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli-studio#features"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli-studio#prerequisites"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Prerequisites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli-studio#installation"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli-studio#usage"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Usage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli-studio#troubleshooting"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Troubleshooting
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* 2. Sentinel */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('sentinel')}
              className="w-full flex items-center justify-between group mb-2 cursor-pointer text-left"
            >
              <span
                className={`font-bold text-sm uppercase tracking-wider ${
                  openSections['sentinel']
                    ? 'text-sky-400'
                    : 'text-slate-500 group-hover:text-sky-400 transition-colors'
                }`}
              >
                Sentinel
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSections['sentinel'] ? 'text-sky-400 rotate-180' : 'text-slate-600'
                }`}
              />
            </button>
            {openSections['sentinel'] && (
              <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                <li>
                  <Link
                    href="/docs/sentinel"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/sentinel#features"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/sentinel#prerequisites"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Prerequisites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/sentinel#installation"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/sentinel#usage"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Usage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/sentinel#troubleshooting"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Troubleshooting
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* In Development Divider */}
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 mt-6 px-1">
            In Development
          </div>

          {/* 3. Crolendar */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('crolendar')}
              className="w-full flex items-center justify-between group mb-2 cursor-pointer text-left"
            >
              <span
                className={`font-bold text-sm uppercase tracking-wider ${
                  openSections['crolendar']
                    ? 'text-purple-400'
                    : 'text-slate-500 group-hover:text-purple-400 transition-colors'
                }`}
              >
                Crolendar
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSections['crolendar'] ? 'text-purple-400 rotate-180' : 'text-slate-600'
                }`}
              />
            </button>
            {openSections['crolendar'] && (
              <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                <li>
                  <Link
                    href="/docs/crolendar"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Overview
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* 4. Synapxis */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('synapxis')}
              className="w-full flex items-center justify-between group mb-2 cursor-pointer text-left"
            >
              <span
                className={`font-bold text-sm uppercase tracking-wider ${
                  openSections['synapxis']
                    ? 'text-amber-400'
                    : 'text-slate-500 group-hover:text-amber-400 transition-colors'
                }`}
              >
                Synapxis
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSections['synapxis'] ? 'text-amber-400 rotate-180' : 'text-slate-600'
                }`}
              />
            </button>
            {openSections['synapxis'] && (
              <ul className="space-y-1 border-l border-slate-800 ml-2 animate-in slide-in-from-top-2 duration-200">
                <li>
                  <Link
                    href="/docs/synapxis"
                    className="block px-4 py-1.5 text-sm text-slate-400 hover:text-white hover:border-l hover:border-white -ml-[1px]"
                  >
                    Overview
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Sidebar Footer - Only Social Icons */}
          <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-4 text-slate-500">
            <Link
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-[#5865F2] transition-colors"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/codefxr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-1 px-6 md:px-12 py-8 min-h-screen min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
