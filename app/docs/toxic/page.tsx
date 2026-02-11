import { AlertTriangle } from "lucide-react";

export default function ToxicDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Toxic ☣️</h1>
        <p className="text-xl text-slate-400 mb-6">High-Performance VirusTotal TUI Dashboard.</p>
        <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-mono border border-red-500/20">Python</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">VirusTotal API</span>
        </div>
      </div>

      <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" /> Visual Dashboard
        </h2>
        <p className="mb-4">
            Seamless, keyboard-centric way to scan threats with a polished "Toxic Red & Cool Grey" aesthetic.
        </p>
        <ul className="space-y-2 text-sm">
            <li><strong className="text-white">File Mode:</strong> Scan local files or hashes.</li>
            <li><strong className="text-white">URL Mode:</strong> Analyze suspicious URLs.</li>
            <li><strong className="text-white">Secure Auth:</strong> Uses native system keyring for API keys.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Installation</h2>
        <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800">
            <code className="text-red-300">
{`git clone https://github.com/yourusername/toxic.git
cd toxic
pip install -r requirements.txt
./run.sh`}
            </code>
        </pre>
      </div>
    </div>
  );
}