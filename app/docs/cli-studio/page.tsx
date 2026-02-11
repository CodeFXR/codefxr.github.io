import { Terminal } from "lucide-react";

export default function CliStudioDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">CLI-Studio</h1>
        <p className="text-xl text-slate-400 mb-6">Terminal user interface for image, video, and audio manipulation.</p>
        <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20">Python</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">TUI</span>
        </div>
      </div>

      <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-green-400" /> Overview
        </h2>
        <p className="mb-4">
            Built with Python and Textual, CLI-Studio combines the speed of the terminal with the usability of a GUI. 
            It features a robust theming system, a command palette for power users, and real-time visual feedback.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <strong className="text-white block mb-1">Status: v0.1.0 (Alpha)</strong>
                Implemented: Core architecture, Theme engine, Video Downloader.
            </div>
            <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <strong className="text-white block mb-1">Planned</strong>
                Audio conversion, Image resizing/filters.
            </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Usage</h2>
        <pre className="bg-slate-950 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800">
            <code className="text-green-300">python cli-studio.py</code>
        </pre>
        <p className="mt-2 text-sm text-slate-500">Requires textual, rich, and yt-dlp installed.</p>
      </div>
    </div>
  );
}