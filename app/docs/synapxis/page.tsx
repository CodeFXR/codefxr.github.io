import { Terminal, Cpu, Share2, AlertTriangle, CheckCircle, FileText, Tag, Keyboard, Command } from "lucide-react";

export default function SynapxisDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      
      {/* --- HEADER --- */}
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Synapxis</h1>
        <p className="text-xl text-slate-400 mb-6 leading-relaxed">
          A terminal-based tool for personal knowledge management using the Zettelkasten method.
          Create atomic notes and link them to form a networked graph of ideas.
        </p>
        <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">Python (Textual)</span>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono border border-orange-500/20">Rust (Backend)</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">TUI</span>
        </div>
      </div>

      {/* --- 1. FEATURES --- */}
      <section id="features" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-teal-500 pl-4">
          Features and Usage
        </h2>
        
        <div className="space-y-8">
          {/* Hybrid Engine */}
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-3">Hybrid Rust/Python Engine</h3>
            <p className="mb-4 text-slate-400">The application uses Python (Textual) for the UI and a compiled Rust backend for performance.</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span><strong>High Definition Rendering:</strong> Uses Unicode Braille patterns (2x4 dot matrix) for sub-pixel precision.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span><strong>Performance:</strong> Native Rust graph physics allow smooth interactions with large datasets.</span>
              </li>
            </ul>
          </div>

          {/* Graph Viz */}
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-3">Graph Visualization</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Share2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Force-Directed Physics:</strong> Connected notes pull together; unconnected notes push apart.</span>
              </li>
              <li className="flex gap-3">
                <Share2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Community Detection:</strong> Clusters of interconnected notes are automatically assigned distinct colors.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Tools Grid */}
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
               <h4 className="font-bold text-white mb-2">Spotlight Mode</h4>
               <p className="text-sm">Hovering over a node dims the background to focus on neighbors.</p>
             </div>
             <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
               <h4 className="font-bold text-white mb-2">Graph Search</h4>
               <p className="text-sm">Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-white font-mono border border-slate-700">F</kbd> to search and center on a note.</p>
             </div>
             <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
               <h4 className="font-bold text-white mb-2">Drag & Drop</h4>
               <p className="text-sm">Click and drag nodes to customize the layout manually.</p>
             </div>
             <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
               <h4 className="font-bold text-white mb-2">Layout Persistence</h4>
               <p className="text-sm">Node positions are saved to disk automatically.</p>
             </div>
          </div>

          {/* New Features Row */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Wikilinks */}
            <div className="bg-teal-500/5 p-6 rounded-xl border border-teal-500/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Command className="w-5 h-5 text-teal-400" />
                    Wikilinks & Autocomplete
                </h3>
                <ul className="space-y-2 text-sm">
                    <li><strong>Link:</strong> Type <span className="font-mono text-teal-400">[[</span> while editing to open the Autocomplete Menu.</li>
                    <li><strong>Select:</strong> Use Up/Down arrows or Mouse to select a note.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-400 border-t border-teal-500/10 pt-3">Creates a bidirectional connection visualized as a line in the Graph View.</p>
            </div>

            {/* Export Studio */}
            <div className="bg-blue-500/5 p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    Export Studio
                </h3>
                <p className="text-sm mb-3">Share your thoughts outside the terminal.</p>
                <div className="bg-slate-950 p-2 rounded border border-slate-800 font-mono text-xs mb-3 text-center">
                    Press <span className="text-blue-400">Alt + E</span> inside a note
                </div>
                <div className="flex gap-2 text-xs font-mono text-slate-400">
                    <span className="bg-slate-900 px-2 py-1 rounded">Markdown</span>
                    <span className="bg-slate-900 px-2 py-1 rounded">HTML</span>
                    <span className="bg-slate-900 px-2 py-1 rounded">PDF</span>
                </div>
            </div>

            {/* Tagging */}
            <div className="bg-orange-500/5 p-6 rounded-xl border border-orange-500/20 md:col-span-2">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-orange-400" />
                    Tagging & Custom Colors
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <strong className="block text-white mb-1">Organize</strong>
                        <p className="text-slate-400">Type tags like <span className="text-orange-400">#ideas</span> or <span className="text-orange-400">#project</span> directly in your text.</p>
                    </div>
                    <div>
                        <strong className="block text-white mb-1">Customize</strong>
                        <p className="text-slate-400">Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-white font-mono text-xs">S</kbd> on the main menu to open Settings and assign specific colors to tags.</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. TERMINALS --- */}
      <section className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-blue-500 pl-4">
          Recommended Terminals
        </h2>
        <p className="mb-6 text-slate-400">
          Synapxis is a TUI. For the best Braille rendering and color accuracy, use a GPU-accelerated terminal:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/50 hover:border-slate-600 transition-colors">
            <h4 className="font-bold text-white mb-1">Ghostty</h4>
            <p className="text-sm text-slate-400">Modern, cross-platform, native TUI support.</p>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/50 hover:border-slate-600 transition-colors">
            <h4 className="font-bold text-white mb-1">Alacritty</h4>
            <p className="text-sm text-slate-400">Highly performance-focused, minimal latency.</p>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/50 hover:border-slate-600 transition-colors">
            <h4 className="font-bold text-white mb-1">WezTerm</h4>
            <p className="text-sm text-slate-400">Strong image protocols and GPU rendering.</p>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/50 hover:border-slate-600 transition-colors">
            <h4 className="font-bold text-white mb-1">iTerm2 (macOS)</h4>
            <p className="text-sm text-slate-400"><strong>Fix:</strong> Settings &gt; Profiles &gt; Keys &gt; Set "Left Option Key" to Esc+.</p>
          </div>
        </div>
      </section>

      {/* --- 3. PREREQUISITES --- */}
      <section id="prerequisites" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-orange-500 pl-4">
          Prerequisites
        </h2>
        <div className="space-y-6">
          <div>
            <p className="mb-3">Run the following to check if you have the necessary tools:</p>
            <pre className="bg-slate-950 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 max-w-[85vw] md:max-w-none">
              <code className="text-slate-300">
{`# Check Python (Must be 3.8+)
python3 --version

# Check Git
git --version`}
              </code>
            </pre>
          </div>
          
          <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
             <h4 className="font-bold text-white mb-3">Missing Tools?</h4>
             <p className="text-sm mb-2">Install via package manager:</p>
             <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-black/30 p-3 rounded">
                    <span className="text-slate-500 block mb-1"># Debian / Ubuntu</span>
                    sudo apt update && sudo apt install python3 git
                </div>
                <div className="bg-black/30 p-3 rounded">
                    <span className="text-slate-500 block mb-1"># macOS (Homebrew)</span>
                    brew install python git
                </div>
                <div className="bg-black/30 p-3 rounded">
                    <span className="text-slate-500 block mb-1"># Fedora</span>
                    sudo dnf install python3 git
                </div>
                <div className="bg-black/30 p-3 rounded">
                    <span className="text-slate-500 block mb-1"># Arch Linux</span>
                    sudo pacman -S python git
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 4. INSTALLATION --- */}
      <section id="installation" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Installation</h2>
        
        {/* Automatic */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            Option A: Automatic <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Recommended</span>
          </h3>
          <p className="mb-4 text-slate-400">Creates a sandboxed environment (.venv), compiles the Rust engine, and sets up aliases.</p>
          <pre className="bg-slate-950 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 shadow-lg shadow-green-900/10 max-w-[85vw] md:max-w-none">
            <code className="text-green-300">
              curl -fsSL https://snx.codefxr.com/install | bash
            </code>
          </pre>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500 font-mono">
            <div className="bg-slate-900/50 p-2 rounded border border-slate-800 break-all">Install Location: ~/.synapxis</div>
            <div className="bg-slate-900/50 p-2 rounded border border-slate-800 break-all">Data Location: ~/.synapxis_v2/notes.db</div>
            <div className="bg-slate-900/50 p-2 rounded border border-slate-800 md:col-span-2">Aliases: synapxis, snx</div>
          </div>
        </div>

        {/* Manual */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Option B: Manual</h3>
          <pre className="bg-slate-950 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 leading-relaxed max-w-[85vw] md:max-w-none">
            <code className="text-slate-300">
{`git clone https://github.com/CodeFXR/Synapxis.git
cd Synapxis

# 1. Create Environment
python3 -m venv .venv
source .venv/bin/activate

# 2. Install Dependencies
pip install textual networkx scipy numpy textual-image maturin aiosqlite

# 3. Compile Rust Backend (Requires cargo)
# If skipped, the app will run in standard definition mode.
cd rust_core
maturin develop --release
cd ..

# 4. Run
python main.py`}
            </code>
          </pre>
        </div>
      </section>

      {/* --- SHORTCUTS (NEW) --- */}
      <section className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-4">
          <Keyboard className="w-6 h-6 text-purple-400" />
          Keyboard Shortcuts
        </h2>
        
        {/* Table Wrapper with mobile scrolling fix */}
        <div className="border border-slate-800 rounded-xl overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[500px]">
                <thead className="bg-slate-900 text-slate-400 font-medium">
                    <tr>
                        <th className="px-4 md:px-6 py-4">Context</th>
                        <th className="px-4 md:px-6 py-4">Shortcut</th>
                        <th className="px-4 md:px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    <tr className="bg-slate-950/50">
                        <td className="px-4 md:px-6 py-3 font-bold text-blue-400">Note View</td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Alt + N</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">New Page</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Alt + F</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Search Notes</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Alt + E</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Export Note</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Alt + B</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Show Backlinks</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Alt + G</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Switch to Graph</td>
                    </tr>
                     <tr className="bg-slate-950/50">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-teal-400 whitespace-nowrap">[[</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Link Autocomplete</td>
                    </tr>
                    <tr className="bg-slate-900/30 border-t border-slate-800">
                        <td className="px-4 md:px-6 py-3 font-bold text-orange-400">Graph View</td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">F</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Find Node</td>
                    </tr>
                     <tr className="bg-slate-900/30">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Mouse Drag</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Pan / Move Node</td>
                    </tr>
                     <tr className="bg-slate-900/30">
                        <td className="px-4 md:px-6 py-3"></td>
                        <td className="px-4 md:px-6 py-3 font-mono text-slate-300 whitespace-nowrap">Scroll</td>
                        <td className="px-4 md:px-6 py-3 text-slate-400">Zoom In/Out</td>
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
                    <h4 className="font-bold text-white">Issue: "Rust backend missing" / Blocky Graphics</h4>
                </div>
                <div className="ml-8 text-sm text-slate-400">
                    <p className="mb-2"><strong>Cause:</strong> The <code>synapxis_rs</code> binary was not compiled found.</p>
                    <p className="mb-2"><strong>Solution:</strong> Install Rust and re-run the installer.</p>
                    <code className="block bg-black/30 p-2 rounded font-mono text-xs break-all">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code>
                </div>
            </div>

            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <div className="flex items-start gap-3 mb-2">
                    <Terminal className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                    <h4 className="font-bold text-white">Issue: "Command not found: synapxis"</h4>
                </div>
                <div className="ml-8 text-sm text-slate-400">
                    <p className="mb-2"><strong>Cause:</strong> Shell configuration not reloaded.</p>
                    <p className="mb-2"><strong>Solution:</strong> Reload your config:</p>
                    <code className="block bg-black/30 p-2 rounded font-mono text-xs">source ~/.bashrc  # Or ~/.zshrc for macOS</code>
                </div>
            </div>

            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <div className="flex items-start gap-3 mb-2">
                    <Share2 className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                    <h4 className="font-bold text-white">Issue: Graph View is empty</h4>
                </div>
                <div className="ml-8 text-sm text-slate-400">
                    <p><strong>Cause:</strong> The graph engine hides isolated nodes to reduce noise.</p>
                    <p><strong>Solution:</strong> Create at least two notes and link them using <code>[[WikiLink]]</code> syntax.</p>
                </div>
            </div>
            
             <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/20 mt-6">
                <h4 className="font-bold text-red-400 mb-2">Uninstalling / Resetting</h4>
                <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                        <p className="text-slate-500 mb-1"># Reset Data (Deletes Notes)</p>
                        <code className="bg-slate-950 p-2 rounded block">rm -rf ~/.synapxis_v2</code>
                    </div>
                    <div>
                        <p className="text-slate-500 mb-1"># Uninstall App</p>
                        <code className="bg-slate-950 p-2 rounded block">rm -rf ~/.synapxis</code>
                    </div>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
}