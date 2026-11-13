import Link from "next/link";
import Image from "next/image";
import {
  Terminal,
  Settings,
  Zap,
  FolderTree,
  Palette,
  Keyboard,
  Shield,
  Cpu,
  AlertTriangle,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Command,
  FileCode,
  Sliders,
} from "lucide-react";

export default function CliStudioDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      {/* --- HEADER --- */}
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          CLI-Studio
        </h1>
        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
          A keyboard-first terminal dashboard and unified media manipulation engine for video, audio, and images.
          Wraps standard command-line tools into dedicated utilities with transparent batch execution, real-time logging, and interactive navigation.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/20">
            Python 3.10+
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-wide border border-sky-500/20">
            Textual TUI
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide border border-amber-500/20">
            62 Media Utilities
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20">
            Mypy Strict
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold tracking-wide border border-slate-700">
            Linux & macOS
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/20">
            MIT License
          </span>
        </div>
      </div>

      {/* --- 1. FEATURES --- */}
      <section id="features" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Key Features & Core Capabilities
        </h2>

        <div className="grid gap-4">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">62 Integrated Media Tools:</strong> Dedicated workflows for video editing, audio mastering, image processing, OCR, metadata stripping, device encoding profiles, and cloud synchronization.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FolderTree className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">Automatic Directory Batch Processing:</strong> Selecting a directory instead of a single file automatically discovers all matching media and processes them sequentially with live progress bars.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FolderTree className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">Interactive Visual File Navigator:</strong> Browse your filesystem visually using arrow keys and breadcrumb paths to select input files and destination folders without typing paths.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">Transparent Execution Console:</strong> Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-white font-mono text-xs border border-slate-700">Ctrl + L</kbd> at any moment to reveal the live execution log and inspect the exact raw CLI arguments and subprocess commands.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">Context-Aware Inline Help:</strong> Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-white font-mono text-xs border border-slate-700">?</kbd> on any menu item for a plain-English explanation of the underlying utility, options, and performance tips.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">Non-blocking Threaded Architecture:</strong> Operations execute in dedicated background worker threads with clean two-phase termination (graceful SIGTERM with automated SIGKILL escalation).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">8 Dynamic Terminal Color Palettes:</strong> Switch instantly across built-in themes (Matrix Green, Cyberpunk, Navy Blue, Nord, Dracula, etc.) via <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs">/themes</code>, persisting to <code className="text-slate-300 font-mono text-xs">~/.cli-studio/config.json</code>.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileCode className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-base">Extensible Plugin System:</strong> Drop custom Python scripts into <code className="text-slate-300 font-mono text-xs">~/.cli-studio/plugins/</code> to register custom tools and automated pipelines.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 2. PREREQUISITES --- */}
      <section id="prerequisites" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Prerequisites & System Packages
        </h2>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
          CLI-Studio runs on <strong>Linux</strong> and <strong>macOS</strong>. The automatic installer will configure these system packages for you, but they can also be installed manually via your native package manager:
        </p>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Tool</th>
                <th className="py-3 px-4">Debian / Ubuntu</th>
                <th className="py-3 px-4">Fedora</th>
                <th className="py-3 px-4">Arch Linux</th>
                <th className="py-3 px-4">macOS (Homebrew)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono text-xs">
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">FFmpeg</td>
                <td className="py-3 px-4 text-emerald-400">ffmpeg</td>
                <td className="py-3 px-4 text-emerald-400">ffmpeg</td>
                <td className="py-3 px-4 text-emerald-400">ffmpeg</td>
                <td className="py-3 px-4 text-emerald-400">ffmpeg</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">ImageMagick</td>
                <td className="py-3 px-4 text-slate-400">imagemagick</td>
                <td className="py-3 px-4 text-slate-400">ImageMagick</td>
                <td className="py-3 px-4 text-slate-400">imagemagick</td>
                <td className="py-3 px-4 text-slate-400">imagemagick</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">ExifTool</td>
                <td className="py-3 px-4 text-slate-400">libimage-exiftool-perl</td>
                <td className="py-3 px-4 text-slate-400">perl-Image-ExifTool</td>
                <td className="py-3 px-4 text-slate-400">perl-image-exiftool</td>
                <td className="py-3 px-4 text-slate-400">exiftool</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">Tesseract</td>
                <td className="py-3 px-4 text-slate-400">tesseract-ocr</td>
                <td className="py-3 px-4 text-slate-400">tesseract</td>
                <td className="py-3 px-4 text-slate-400">tesseract</td>
                <td className="py-3 px-4 text-slate-400">tesseract</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">MKVToolNix</td>
                <td className="py-3 px-4 text-slate-400">mkvtoolnix</td>
                <td className="py-3 px-4 text-slate-400">mkvtoolnix</td>
                <td className="py-3 px-4 text-slate-400">mkvtoolnix</td>
                <td className="py-3 px-4 text-slate-400">mkvtoolnix</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">ZBar (Barcodes)</td>
                <td className="py-3 px-4 text-slate-400">zbar-tools</td>
                <td className="py-3 px-4 text-slate-400">zbar</td>
                <td className="py-3 px-4 text-slate-400">zbar</td>
                <td className="py-3 px-4 text-slate-400">zbar</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">Rclone</td>
                <td className="py-3 px-4 text-slate-400">rclone</td>
                <td className="py-3 px-4 text-slate-400">rclone</td>
                <td className="py-3 px-4 text-slate-400">rclone</td>
                <td className="py-3 px-4 text-slate-400">rclone</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">HandBrake CLI</td>
                <td className="py-3 px-4 text-slate-400">handbrake-cli</td>
                <td className="py-3 px-4 text-slate-400">HandBrake-cli</td>
                <td className="py-3 px-4 text-slate-400">handbrake-cli</td>
                <td className="py-3 px-4 text-slate-400">handbrake</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold font-sans text-white">Chafa</td>
                <td className="py-3 px-4 text-slate-400">chafa</td>
                <td className="py-3 px-4 text-slate-400">chafa</td>
                <td className="py-3 px-4 text-slate-400">chafa</td>
                <td className="py-3 px-4 text-slate-400">chafa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 3. INSTALLATION --- */}
      <section id="installation" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6">Installation</h2>

        <div className="space-y-6">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              Universal Auto-Installer <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-sans font-semibold">Recommended</span>
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Configures system package dependencies, clones into <code className="text-slate-300 font-mono text-xs">~/.cli-studio/</code>, builds an isolated virtual environment, and installs global shell launchers:
            </p>
            <div className="bg-[#050608] p-4 rounded-lg font-mono text-sm border border-slate-800 text-emerald-400 overflow-x-auto select-all mb-4">
              <code>curl -fsSL https://cso.codefxr.com/install | bash</code>
            </div>
            <div className="space-y-1.5 text-xs text-slate-400 border-t border-slate-800/80 pt-3">
              <p><strong className="text-slate-300">What the installer does:</strong></p>
              <p>1. Detects OS and installs native packages via apt, dnf, pacman, or brew.</p>
              <p>2. Clones the repository cleanly to <code className="text-slate-300 font-mono">~/.cli-studio/</code>.</p>
              <p>3. Creates a dedicated Python virtual environment with textual, Pillow, yt-dlp, and natsort.</p>
              <p>4. Generates symlinks in <code className="text-slate-300 font-mono">~/.local/bin/cli-studio</code> and <code className="text-slate-300 font-mono">~/.local/bin/cso</code>.</p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">Launching & Updating</h3>
            <p className="text-sm text-slate-400 mb-3">Launch from anywhere in your terminal using either command alias:</p>
            <pre className="bg-[#050608] p-4 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto border border-slate-800 mb-3">
{`cli-studio
# or
cso`}
            </pre>
            <p className="text-sm text-slate-400 mb-2">To update Python dependencies and core tools later:</p>
            <pre className="bg-[#050608] p-3 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800">
{`cli-studio update`}
            </pre>
          </div>
        </div>
      </section>

      {/* --- 4. USAGE --- */}
      <section id="usage" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Keyboard className="w-6 h-6 text-emerald-400" /> Keyboard Navigation & Shortcuts
        </h2>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50 mb-8">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Shortcut</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-amber-400">?</td>
                <td className="py-3 px-4 font-semibold text-white">Help Manual</td>
                <td className="py-3 px-4 text-slate-400">Open the reference manual for the highlighted tool</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-emerald-400">Ctrl + L</td>
                <td className="py-3 px-4 font-semibold text-white">Log Console</td>
                <td className="py-3 px-4 text-slate-400">Toggle live execution logs and raw subprocess output</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-sky-400">Alt + M</td>
                <td className="py-3 px-4 font-semibold text-white">Navigation Menu</td>
                <td className="py-3 px-4 text-slate-400">Open the tool navigation drawer</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-pink-400">Alt + T</td>
                <td className="py-3 px-4 font-semibold text-white">Theme Palette</td>
                <td className="py-3 px-4 text-slate-400">Select from 8 built-in terminal color palettes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-purple-400">Alt + S</td>
                <td className="py-3 px-4 font-semibold text-white">Settings</td>
                <td className="py-3 px-4 text-slate-400">Configure cookies, hardware acceleration, and defaults</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-slate-300">Alt + A</td>
                <td className="py-3 px-4 font-semibold text-white">About</td>
                <td className="py-3 px-4 text-slate-400">View application diagnostics and engine version metadata</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-slate-300">Alt + B</td>
                <td className="py-3 px-4 font-semibold text-white">Back</td>
                <td className="py-3 px-4 text-slate-400">Navigate back to the previous screen</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-red-400">Alt + E</td>
                <td className="py-3 px-4 font-semibold text-white">Exit</td>
                <td className="py-3 px-4 text-slate-400">Exit the application gracefully</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-slate-300">Esc</td>
                <td className="py-3 px-4 font-semibold text-white">Dismiss / Home</td>
                <td className="py-3 px-4 text-slate-400">Dismiss modal dialogs or return to the main dashboard</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono font-bold text-red-400">Ctrl + C</td>
                <td className="py-3 px-4 font-semibold text-white">Force Quit</td>
                <td className="py-3 px-4 text-slate-400">Immediately abort current workers and terminate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Command className="w-5 h-5 text-emerald-400" /> Slash Command Reference
        </h3>
        <p className="text-sm text-slate-400 mb-3">Jump directly to any section using the built-in command prompt:</p>
        <pre className="bg-[#050608] p-4 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto border border-slate-800 leading-relaxed">
{`/home       /menu       /about      /themes      /settings     /exit
/video      /audio      /image      /cloud       /devices      /back
/themes <name>          (example: /themes navy)`}
        </pre>
      </section>

      {/* --- 5. TROUBLESHOOTING & SETTINGS --- */}
      <section id="troubleshooting" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Sliders className="w-6 h-6 text-emerald-400" /> Settings & Subprocess Security
        </h2>

        <p className="text-sm text-slate-400 mb-6">
          Preferences persist atomically in <code className="text-slate-300 font-mono text-xs">~/.cli-studio/config.json</code>:
        </p>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50 mb-8">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Setting</th>
                <th className="py-3 px-4">Default</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-400">hw_accel</td>
                <td className="py-3 px-4 font-mono text-slate-400">"" (Software)</td>
                <td className="py-3 px-4 text-slate-300">Hardware encoding engine: nvenc, vaapi, videotoolbox, or qsv</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-400">ffmpeg_overwrite</td>
                <td className="py-3 px-4 font-mono text-slate-400">true</td>
                <td className="py-3 px-4 text-slate-300">Automatically overwrite destination files; when disabled, uses -n</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-400">whisper_model</td>
                <td className="py-3 px-4 font-mono text-slate-400">small</td>
                <td className="py-3 px-4 text-slate-300">faster-whisper weights: tiny, base, small, medium, large-v3</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-400">whisper_device</td>
                <td className="py-3 px-4 font-mono text-slate-400">auto</td>
                <td className="py-3 px-4 text-slate-300">Inference device: auto, cpu, or cuda</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-400">yt_dlp_cookies</td>
                <td className="py-3 px-4 font-mono text-slate-400">"" (Disabled)</td>
                <td className="py-3 px-4 text-slate-300">Browser profile for session cookies (e.g. firefox, chrome)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-emerald-400">enable_plugins</td>
                <td className="py-3 px-4 font-mono text-slate-400">false</td>
                <td className="py-3 px-4 text-slate-300">Security gate required to execute scripts from plugins directory</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
          <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" /> Security & Reliability Model
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><strong className="text-slate-200">Zero Shell Injection:</strong> All system commands use array-based argument vectors (<code className="text-slate-300 font-mono text-xs">shell=False</code>).</li>
            <li><strong className="text-slate-200">Path Canonicalization:</strong> Paths are resolved and verified against symlink clobbering before file creation.</li>
            <li><strong className="text-slate-200">Strict Range Validation:</strong> Numeric bounds, aspect ratios, and timestamps are checked before passing arguments to FFmpeg or ImageMagick.</li>
            <li><strong className="text-slate-200">Verified Test Suite:</strong> 168 automated regression, integration, and unit tests passing with strict Mypy and Ruff verification.</li>
          </ul>
        </div>
      </section>

      {/* --- 6. GITHUB REPOSITORY CONTAINER --- */}
      <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_35px_-5px_rgba(34,197,94,0.3)] transition-all mt-16">
        {/* Watermark in top-right corner */}
        <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
          <Image
            src="/logo1.png"
            alt="CLI-Studio Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full w-full">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
            <div className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/github_logo.png"
                alt="GitHub Logo"
                fill
                className="object-contain"
              />
            </div>
            CLI-Studio Repository
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-base max-w-xl">
            Explore the open-source Python codebase, view release changelogs, submit feature requests, or contribute plugins on GitHub.
          </p>

          <div>
            <Link
              href="https://github.com/CodeFXR/CLI-Studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-lg cursor-pointer">
                GitHub Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
