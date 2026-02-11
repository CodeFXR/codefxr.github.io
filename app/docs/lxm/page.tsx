import { Layers } from "lucide-react";

export default function LxmDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">LXM</h1>
        <p className="text-xl text-slate-400 mb-6">Modern, lightweight, and asynchronous terminal file manager.</p>
        <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">Rust</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">Async</span>
        </div>
      </div>

      <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" /> Key Features
        </h2>
        <ul className="space-y-2 text-sm">
            <li><strong className="text-white">Rich Previews:</strong> View images directly in terminal (Kitty protocol).</li>
            <li><strong className="text-white">Fast Navigation:</strong> Asynchronous directory loading.</li>
            <li><strong className="text-white">Syntax Highlighting:</strong> Instant text file previews.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Installation</h2>
        <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800">
            <code className="text-blue-300">
{`git clone https://github.com/yourusername/lxm.git
cd lxm
cargo build --release
./target/release/lxm_async`}
            </code>
        </pre>
      </div>
    </div>
  );
}