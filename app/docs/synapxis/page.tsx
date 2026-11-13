import Link from "next/link";
import Image from "next/image";

export default function SynapxisDocs() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        Synapxis
      </h1>
      <p className="text-lg text-slate-400 mb-12 leading-relaxed font-normal">
        Personal knowledge management and networked thought graph in the terminal.
      </p>

      {/* Baseball Card container matching Documentation Hub */}
      <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-amber-500/50 hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.3)] transition-all">
        {/* Synapxis Logo Watermark in top-right corner */}
        <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
          <Image
            src="/logo2.png"
            alt="Synapxis Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/github_logo.png"
                alt="GitHub Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Synapxis
            </h2>
            <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide border border-amber-500/25">
              In Development
            </span>
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed text-base max-w-xl">
            A terminal-based tool for personal knowledge management using the Zettelkasten method. Built with a hybrid Textual UI and compiled Rust backend for sub-pixel graph visualization and atomic note linking. Full documentation will be available upon release.
          </p>

          <div>
            <Link
              href="https://github.com/CodeFXR/Synapxis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-lg cursor-pointer">
                GitHub Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
