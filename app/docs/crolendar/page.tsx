import { Calendar } from "lucide-react";

export default function CrolendarDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Crolendar</h1>
        <p className="text-xl text-slate-400 mb-6">A modern Terminal User Interface for visualizing and managing cron schedules.</p>
        <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20">Go</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">BubbleTea</span>
        </div>
      </div>

      <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" /> Why Crolendar?
        </h2>
        <ul className="space-y-2 text-sm">
            <li><strong className="text-white">Visual Timeline:</strong> View raw crontab schedules mapped onto a calendar grid.</li>
            <li><strong className="text-white">Vim-Inspired:</strong> Move through schedule with h/j/k/l motions.</li>
            <li><strong className="text-white">Auto-Discovery:</strong> Loads system crontab automatically.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Installation</h2>
        <pre className="bg-slate-950 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800">
            <code className="text-purple-300">
{`git clone https://github.com/yourusername/crolendar.git
cd crolendar
go mod tidy
go run .`}
            </code>
        </pre>
      </div>
    </div>
  );
}