import { Layers } from "lucide-react";

export default function LxmDocs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center border border-slate-800 rounded-2xl bg-slate-900/20 p-12">
      <div className="p-6 bg-slate-900 rounded-full mb-6 border border-slate-800 shadow-lg shadow-green-500/10">
        <Layers className="w-12 h-12 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">LXM</h1>
      <div className="px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 font-mono text-xs mb-6 uppercase tracking-wider">
        Under Construction
      </div>
      <p className="text-slate-400 max-w-md leading-relaxed">
        We are currently finalizing the documentation and release build for LXM. 
        Please check back shortly for installation guides and API references.
      </p>
    </div>
  );
}