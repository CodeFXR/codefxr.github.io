import { Terminal, Settings, Zap, ImageIcon, FolderTree, Palette, Keyboard, Shield, Cpu, AlertTriangle, Trash2 } from "lucide-react";

export default function CliStudioDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      
      {/* --- HEADER --- */}
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">CLI-Studio</h1>
        <p className="text-xl text-slate-400 mb-6 leading-relaxed">
          An advanced Terminal User Interface (TUI) that abstracts and simplifies powerful command-line media tools 
          (FFmpeg, ImageMagick, yt-dlp, Pillow, ExifTool).
        </p>
        <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20">Python 3.10+</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">TUI</span>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono border border-orange-500/20">Media Tools</span>
        </div>
      </div>

      {/* --- 1. FEATURES --- */}
      <section id="features" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-green-500 pl-4">
          Key Features
        </h2>
        
        <div className="grid gap-6">
          <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div><strong className="text-slate-300 text-base">37+ Integrated Tools:</strong> A massive suite of media manipulation utilities out-of-the-box.</div>
                </li>
                <li className="flex items-start gap-3">
                    <FolderTree className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div><strong className="text-slate-300 text-base">Interactive File Explorer:</strong> Visually browse your filesystem to select files and destinations. No more typing absolute paths.</div>
                </li>
                <li className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div><strong className="text-slate-300 text-base">Auto-Batch Processing:</strong> Select a folder instead of a file, and process every piece of media inside it with live progress bars.</div>
                </li>
                <li className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div><strong className="text-slate-300 text-base">Smart Input Autofill:</strong> Integrates ffprobe to dynamically analyze file metadata and pre-fill fields (e.g., video length).</div>
                </li>
                <li className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    <div><strong className="text-slate-300 text-base">Power User Log Console:</strong> Press <kbd className="bg-slate-800 px-1 rounded text-white font-mono">Ctrl + L</kbd> to toggle a debug log revealing the exact raw CLI commands being executed.</div>
                </li>
                <li className="flex items-start gap-3">
                    <Palette className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <div><strong className="text-slate-300 text-base">Dynamic Theming Engine:</strong> 8 built-in aesthetic themes that save to preferences. Switch instantly via <code className="text-pink-400 bg-pink-400/10 px-1 rounded">/themes</code>.</div>
                </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 2. PREREQUISITES --- */}
      <section id="prerequisites" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-orange-500 pl-4">
          Prerequisites
        </h2>
        <div className="space-y-6">
          <p className="mb-3 text-slate-400">CLI-Studio relies on several system-level media engines. Our installer attempts to configure these automatically.</p>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
             <ul className="list-disc pl-5 text-sm space-y-2 text-slate-400">
                <li><strong className="text-white">Python 3.10+</strong></li>
                <li><strong className="text-white">FFmpeg & FFprobe:</strong> For all video and audio manipulation.</li>
                <li><strong className="text-white">ImageMagick:</strong> For advanced image filtering and background removal.</li>
                <li><strong className="text-white">ExifTool:</strong> For reading and stripping media metadata.</li>
                <li><strong className="text-white">yt-dlp:</strong> For fetching web video and audio streams.</li>
             </ul>
          </div>
        </div>
      </section>

      {/* --- 3. INSTALLATION --- */}
      <section id="installation" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Installation</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            Option A: Automatic Install <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Recommended</span>
          </h3>
          <p className="mb-4 text-slate-400">Installs dependencies, sets up an isolated Python environment, and creates global command aliases on Linux or macOS.</p>
          <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 shadow-lg shadow-green-900/10 max-w-[85vw] md:max-w-none">
            <code className="text-green-300">
              curl -fsSL https://cso.codefxr.com/install | bash
            </code>
          </pre>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Option B: Manual Setup</h3>
          <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 leading-relaxed max-w-[85vw] md:max-w-none">
            <code className="text-slate-300">
{`# 1. Ensure ffmpeg, imagemagick, and exiftool are installed via apt/brew/pacman

# 2. Clone the repository
git clone https://github.com/codefxr/cli-studio.git
cd cli-studio

# 3. Create Environment & Install
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 4. Run
python cli-studio.py`}
            </code>
          </pre>
        </div>
      </section>

      {/* --- 4. USAGE --- */}
      <section id="usage" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-4">
          Usage & Navigation
        </h2>
        
        <p className="mb-4 text-slate-400">Launch the dashboard from anywhere using the full name or acronym:</p>
        <pre className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-800 max-w-[85vw] md:max-w-none mb-8">
            <code className="text-slate-300">cli-studio<br/><br/># OR<br/><br/>cso</code>
        </pre>

        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-purple-400" /> Keyboard Shortcuts
        </h3>
        <div className="border border-slate-800 rounded-xl overflow-x-auto mb-8">
            <table className="w-full text-left text-sm min-w-[500px]">
                <thead className="bg-slate-900 text-slate-400 font-medium">
                    <tr>
                        <th className="px-6 py-4">Key Binding</th>
                        <th className="px-6 py-4">Action</th>
                        <th className="px-6 py-4">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-teal-400">?</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Help</td>
                        <td className="px-6 py-3 text-slate-400">Open explanation for current tool</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Ctrl + L</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Log Console</td>
                        <td className="px-6 py-3 text-slate-400">Toggle raw execution log view</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Alt + M</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Menu</td>
                        <td className="px-6 py-3 text-slate-400">Open the main tools menu</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Alt + T</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Themes</td>
                        <td className="px-6 py-3 text-slate-400">Open theme selection screen</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Alt + B</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Back</td>
                        <td className="px-6 py-3 text-slate-400">Return to previous screen</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Alt + E</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Exit</td>
                        <td className="px-6 py-3 text-slate-400">Close the application</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Esc</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Home / Cancel</td>
                        <td className="px-6 py-3 text-slate-400">Go to Home or close modal</td>
                    </tr>
                    <tr className="bg-slate-950/50">
                        <td className="px-6 py-3 font-mono text-slate-300">Ctrl + C</td>
                        <td className="px-6 py-3 font-bold text-slate-300">Quit</td>
                        <td className="px-6 py-3 text-slate-400">Force quit application</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Command Bar Input</h3>
        <p className="text-slate-400 mb-4 text-sm">Type these commands into the bottom input bar to navigate quickly:</p>
        <ul className="list-disc pl-5 text-sm space-y-2 text-slate-400 bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            <li><code className="text-green-400 bg-green-400/10 px-1 rounded">/home</code> - Go to dashboard.</li>
            <li><code className="text-green-400 bg-green-400/10 px-1 rounded">/menu</code> - Open tool menu.</li>
            <li><code className="text-green-400 bg-green-400/10 px-1 rounded">/video</code>, <code className="text-green-400 bg-green-400/10 px-1 rounded">/audio</code>, <code className="text-green-400 bg-green-400/10 px-1 rounded">/image</code> - Jump directly to specific Toolkits.</li>
            <li><code className="text-green-400 bg-green-400/10 px-1 rounded">/themes</code> - Open theme picker.</li>
            <li><code className="text-green-400 bg-green-400/10 px-1 rounded">/themes &lt;name&gt;</code> - Apply a specific theme (e.g., <code className="text-green-400">/themes pink</code>).</li>
        </ul>
      </section>

      {/* --- 5. CAPABILITIES --- */}
      <section id="capabilities" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-blue-500 pl-4">
          Tool Capabilities
        </h2>
        
        <div className="grid gap-6">
            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-3">Video Tools (ffmpeg & yt-dlp)</h3>
                <ul className="space-y-2 text-sm text-slate-400 list-disc pl-5">
                    <li><strong>Download Media:</strong> Fetch single videos or playlists (<code className="text-slate-300">--yes-playlist</code>).</li>
                    <li><strong>Convert & Scale:</strong> Transcode to MP4, MKV, AVI, WebM, MOV. Resize instantly (<code className="text-slate-300">1920:-1</code>).</li>
                    <li><strong>Edit & Manipulate:</strong> Trim, extract audio, mute, rotate, reverse time, or change speed.</li>
                    <li><strong>Advanced Filtering:</strong> Optimized GIFs, extract frames, watermarks, fade, or mux audio.</li>
                </ul>
            </div>

            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-3">Audio Tools (ffmpeg)</h3>
                <ul className="space-y-2 text-sm text-slate-400 list-disc pl-5">
                    <li><strong>Convert & Trim:</strong> Transcode to MP3, WAV, FLAC, AAC, OGG. Slice precise segments.</li>
                    <li><strong>Professional Polish:</strong> Normalize audio (<code className="text-slate-300">-af loudnorm</code>), adjust multipliers, speed up tempo without shifting pitch, or mix tracks.</li>
                </ul>
            </div>

            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-3">Image Tools (Pillow, ImageMagick, ExifTool)</h3>
                <ul className="space-y-2 text-sm text-slate-400 list-disc pl-5">
                    <li><strong>Batch Convert & Resize:</strong> Process folders. High-quality scaling.</li>
                    <li><strong>Creative Edits:</strong> Remove solid backgrounds, apply filters (Sepia, Charcoal), flip, crop.</li>
                    <li><strong>Privacy & Utility:</strong> Strip tracking metadata (<code className="text-slate-300">-all=</code>), or convert folders to PDF.</li>
                </ul>
            </div>
        </div>
      </section>

      {/* --- 6. ARCHITECTURE --- */}
      <section id="architecture" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-yellow-500 pl-4">
          Architecture & Security
        </h2>
        <p className="mb-6 text-slate-400">Built on the <strong>Textual</strong> framework, utilizing an async component-based architecture.</p>
        
        <div className="space-y-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex gap-4 items-start">
                <Cpu className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-white">Worker Threading</h4>
                    <p className="text-sm text-slate-400">Heavy operations (transcodes, downloads) are offloaded to Textual Workers, ensuring the TUI remains responsive and updates progress bars without freezing.</p>
                </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex gap-4 items-start">
                <Shield className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-white">Security (Anti-Flag Injection)</h4>
                    <p className="text-sm text-slate-400">All user-provided paths are wrapped in <code className="text-slate-300">abspath(expanduser())</code> to neutralize flag injection vulnerabilities when executing shell commands.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- 7. TROUBLESHOOTING --- */}
      <section id="troubleshooting" className="mb-20 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">Troubleshooting</h2>
        
        <div className="space-y-4">
            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500" /> "ffmpeg not found"</h4>
                <div className="text-sm text-slate-400 ml-6">
                    <p><strong>Cause:</strong> System cannot locate ffmpeg in your PATH.</p>
                    <p className="mb-2"><strong>Solution:</strong> Install globally via <code className="text-slate-300">apt install ffmpeg</code> or <code className="text-slate-300">brew install ffmpeg</code>.</p>
                </div>
            </div>

            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500" /> Downloads Failing (yt-dlp)</h4>
                <div className="text-sm text-slate-400 ml-6">
                    <p><strong>Cause:</strong> Websites update players, breaking older yt-dlp versions.</p>
                    <p className="mb-2"><strong>Solution:</strong> Update manually: <code className="text-slate-300 bg-slate-950 px-2 py-1 rounded border border-slate-800">pip install --upgrade yt-dlp</code></p>
                </div>
            </div>

            <div className="bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500" /> TUI Visual Glitches</h4>
                <div className="text-sm text-slate-400 ml-6">
                    <p><strong>Cause:</strong> Terminal lacks truecolor support, or window is too small.</p>
                    <p className="mb-2"><strong>Solution:</strong> Use modern, GPU-accelerated terminals like <strong>Ghostty</strong>, <strong>Alacritty</strong>, or <strong>Kitty</strong>.</p>
                </div>
            </div>

            <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/20 mt-6">
                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><Trash2 className="w-4 h-4" /> Uninstalling</h4>
                <div className="text-xs font-mono text-slate-300 bg-slate-950 p-4 rounded border border-slate-800">
                    <p className="text-slate-500 mb-1"># 1. Remove application directory</p>
                    <p className="mb-3">rm -rf ~/.cli-studio</p>
                    <p className="text-slate-500 mb-1"># 2. Remove global aliases</p>
                    <p>rm ~/.local/bin/cli-studio</p>
                    <p>rm ~/.local/bin/cso</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}