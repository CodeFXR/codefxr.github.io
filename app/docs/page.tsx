import Link from "next/link";
import Image from "next/image";
import { HelpCircle } from "lucide-react";

export default function DocsHome() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        Documentation Hub
      </h1>
      <p className="text-lg text-slate-400 mb-12 leading-relaxed font-normal">
        Browse overviews, installation guides, and configurations.
      </p>

      {/* Baseball Card - Need Help with GitHub Logo Watermark */}
      <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-slate-700 hover:shadow-[0_0_35px_-5px_rgba(255,255,255,0.08)] transition-all">
        {/* GitHub Logo Watermark in top-right corner */}
        <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
          <Image
            src="/github_logo.png"
            alt="GitHub Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full w-full">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-blue-400" /> Need help?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-base max-w-xl">
            If you encounter bugs or have feature requests, please open an issue on our GitHub repositories.
          </p>

          <div>
            <Link
              href="https://github.com/CodeFXR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 hover:bg-slate-200 hover:shadow-lg cursor-pointer">
                GitHub Repositories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
