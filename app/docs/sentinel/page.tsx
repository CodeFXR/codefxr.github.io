import { ShieldCheck, Activity, UserCheck, Lock, PenTool, AlertTriangle, Keyboard } from "lucide-react";

export default function SentinelDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      
      {/* --- HEADER --- */}
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Sentinel</h1>
        <p className="text-xl text-slate-400 mb-6 leading-relaxed">
          Enterprise Identity Manager for Linux. Simplifies DoD Smart Card (CAC/PIV) operations with a modern TUI.
        </p>
        <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-mono border border-yellow-500/20">Python 3.10+</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">TUI</span>
            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-mono border border-red-500/20">DoD PKI</span>
        </div>
      </div>

      {/* --- 1. FEATURES --- */}
      <section id="features" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-slate-400 pl-4">
          Features
        </h2>
        
        <div className="grid gap-6">
          {/* Diagnostics */}
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-400" /> System Diagnostics & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-slate-300">Real-time Monitoring:</strong> Visual status of PC/SC service, Middleware, and Reader.</li>
                <li><strong className="text-slate-300">Auto-Remediation:</strong> One-click fix for dead smart card services.</li>
                <li><strong className="text-slate-300">STIG Compliance:</strong> Built-in RHEL 9 security baseline checks.</li>
            </ul>
          </div>

          {/* Identity */}
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-400" /> Identity Management
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-slate-300">Visual Dashboard:</strong> Cardholder Name, Agency, and Token Info at a glance.</li>
                <li><strong className="text-slate-300">PIN Management:</strong> Check retry counts, change PIN, or unblock via PUK.</li>
                <li><strong className="text-slate-300">Identity Mapping:</strong> Extracts Principal Names (UPN) for local user mapping.</li>
            </ul>
          </div>

          {/* Certs */}
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-yellow-400" /> Certificate Validation
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-slate-300">AIA Chasing:</strong> Dynamically fetches missing intermediate certificates (Fixes Error 20).</li>
                <li><strong className="text-slate-300">Authenticated Fetch:</strong> Uses CAC PIN for mutual TLS in restricted networks.</li>
                <li><strong className="text-slate-300">Mega-Bundle:</strong> One-click install of the complete DoD Trust Chain.</li>
            </ul>
          </div>

          {/* Signing */}
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-green-400" /> Digital Signing & Operations
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-slate-300">PDF Signing:</strong> Digitally sign documents with hardware token.</li>
                <li><strong className="text-slate-300">SSH Integration:</strong> Automates SSH Public Key export and agent adding.</li>
                <li><strong className="text-slate-300">Browser Config:</strong> Auto-configures Firefox and Chrome databases.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 2. PREREQUISITES --- */}
      <section id="prerequisites" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-blue-500 pl-4">
          Prerequisites
        </h2>
        <div className="space-y-6">
          <p className="mb-3">Ensure you have a standard Linux environment (Fedora, RHEL, Ubuntu, Debian, Arch).</p>
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
             <h4 className="font-bold text-white mb-2">Required Hardware & Tools</h4>
             <ul className="list-disc pl-5 text-sm space-y-1 text-slate-400">
                <li>USB Smart Card Reader + Valid ISO 7816 Smart Card</li>
                <li><code>pcscd</code> (Daemon) and <code>opensc</code> (Middleware)</li>
                <li>Python 3.10+</li>
                <li><code>git</code> and <code>curl</code></li>
             </ul>
          </div>
        </div>
      </section>

      {/* --- 3. INSTALLATION --- */}
      <section id="installation" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Installation</h2>
        
        {/* Automatic */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            Option A: Automatic <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Recommended</span>
          </h3>
          <p className="mb-4 text-slate-400">Clones the repo, creates a virtual environment, installs dependencies, and sets up the alias.</p>
          <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 shadow-lg shadow-green-900/10 max-w-[85vw] md:max-w-none">
            <code className="text-green-300">
              curl -fsSL https://snl.codefxr.com/install | bash
            </code>
          </pre>
        </div>

        {/* Manual */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Option B: Manual</h3>
          <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 leading-relaxed max-w-[85vw] md:max-w-none">
            <code className="text-slate-300">
{`git clone https://github.com/CodeFXR/Sentinel.git
cd Sentinel

# 1. Create Environment
python3 -m venv .venv
source .venv/bin/activate

# 2. Install Dependencies
pip install textual pyhanko cryptography

# 3. Run
python main.py`}
            </code>
          </pre>
        </div>
      </section>

      {/* --- 4. USAGE --- */}
      <section id="usage" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-4">
          Usage
        </h2>
        
        <p className="mb-4 text-slate-400">Restart your terminal and type:</p>
        <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 max-w-[85vw] md:max-w-none mb-8">
            <code className="text-slate-300">snl</code>
        </pre>

        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-purple-400" /> Keyboard Navigation
        </h3>
        <div className="border border-slate-800 rounded-xl overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[500px]">
                <thead className="bg-slate-900 text-slate-400 font-medium">
                    <tr>
                        <th className="px-6 py-4">Key</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Tab</td>
                        <td className="px-6 py-3 text-slate-400">Cycle through inputs and buttons</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Enter</td>
                        <td className="px-6 py-3 text-slate-400">Activate button or submit form</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Ctrl + C</td>
                        <td className="px-6 py-3 text-slate-400">Force Quit</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* --- 5. TROUBLESHOOTING --- */}
      <section id="troubleshooting" className="mb-20 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">Troubleshooting</h2>
        <div className="space-y-4">
            
            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                    <h4 className="font-bold text-white">Card Reader Not Detected</h4>
                </div>
                <div className="ml-8 text-sm text-slate-400">
                    <p>Ensure your USB reader is plugged in <strong>before</strong> starting the app.</p>
                    <p>If the "Service" LED in Sentinel is red, click the <strong>"Fix Service"</strong> button inside the app.</p>
                </div>
            </div>

            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <div className="flex items-start gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <h4 className="font-bold text-white">Error 20: Unable to get local issuer</h4>
                </div>
                <div className="ml-8 text-sm text-slate-400">
                    <p className="mb-2">System is missing an Intermediate CA certificate.</p>
                    <ol className="list-decimal pl-5 space-y-1">
                        <li>Go to <strong>Validation</strong> tab.</li>
                        <li>Enter PIN (recommended).</li>
                        <li>Click <strong>Validate & Fix</strong> to fetch missing certs via AIA.</li>
                    </ol>
                </div>
            </div>
            
             <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/20 mt-6">
                <h4 className="font-bold text-red-400 mb-2">Uninstalling</h4>
                <div className="grid gap-2 font-mono text-xs">
                    <code className="bg-slate-950 p-2 rounded block text-slate-300">rm -rf ~/.sentinel</code>
                    <p className="text-slate-500 italic">Then remove the 'alias snl=...' line from your .bashrc/.zshrc</p>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
}