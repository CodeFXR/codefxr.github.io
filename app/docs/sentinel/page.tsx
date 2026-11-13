import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Activity,
  UserCheck,
  Lock,
  AlertTriangle,
  Monitor,
  Terminal,
  Cpu,
  KeyRound,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Sliders,
  RotateCcw,
  Zap,
} from "lucide-react";

export default function SentinelDocs() {
  return (
    <div className="text-slate-300 max-w-4xl pb-20">
      {/* --- HEADER --- */}
      <div className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Sentinel
        </h1>
        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
          Automated Common Access Card (CAC) and PIV identity, middleware, and trust manager for Linux. Built with a native GTK4/Libadwaita desktop interface, a compiled Rust hardware APDU core, and automated DoD PKI setup.
        </p>
        <div className="flex flex-wrap gap-2.5 mb-6">
          <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-wide border border-sky-500/20">
            v2.0.3 Stable
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20">
            Rust Core
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/20">
            GTK4 / Libadwaita
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide border border-purple-500/20">
            DoD PKI & OCSP
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold tracking-wide border border-slate-700">
            Linux Native
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-500/20">
            MIT License
          </span>
        </div>

        {/* Disclaimer Notice */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-200">Disclaimer:</strong> Unofficial open-source utility; not affiliated with, sponsored by, or endorsed by the U.S. Department of Defense (DoD) or the Defense Information Systems Agency (DISA).
        </div>
      </div>

      {/* --- 1. FEATURES --- */}
      <section id="features" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-sky-400" /> Why Sentinel & Core Architecture
        </h2>

        <div className="grid gap-5">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-sky-400" /> Cryptographic Trust Verification
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Configuring CAC on Linux typically requires compiling OpenSC drivers, editing NSS databases, installing root certificate stores across divergent distro paths, and fighting browser policy locks. Sentinel automates this entire pipeline into a verified workflow:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Dual-Manifest Certificate Validation:</strong> Every DoD certificate is verified against raw-file and canonical ASN.1 DER SHA-256 manifests, CA basic constraints, and validity windows prior to installation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">PKI Trust Anchor Separation:</strong> Installs only the 4 self-signed DoD Root CAs into the operating system root trust store, while importing intermediate CAs into browser NSS databases for clean chain building.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Deep Browser Enterprise Integration:</strong> Automatically configures PKCS#11 modules via non-destructive Firefox enterprise policies (<code className="text-slate-300 font-mono text-xs">policies.json</code>) and Chrome/Chromium NSS databases (<code className="text-slate-300 font-mono text-xs">~/.pki/nssdb</code>).</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-400" /> Hardware Optimization & APDU Core
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Native Rust APDU Transceiver:</strong> Native Rust module communicates directly over PC/SC buses to probe reader presence, smartcard insertion, ATR, and card state without Python overhead.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Broadcom Reader Optimization:</strong> Automatically applies OpenSC driver constraints via <code className="text-slate-300 font-mono text-xs">sentinel --reader-fix</code> to eliminate 26-second Broadcom 58200 contactless initialization hangs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Secure On-Card PIN Change:</strong> Interactively updates PIV smart card PINs using NIST SP 800-73-4 APDUs in exclusive PC/SC transactions with native Rust buffer zeroization.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Card Removal Screen Lock:</strong> Optional automated background daemon locks the user desktop immediately when the card is pulled (<code className="text-slate-300 font-mono text-xs">sentinel --lock-on-removal</code>).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Full Operational Rollback:</strong> Non-destructive <code className="text-slate-300 font-mono text-xs">--uninstall</code> mode cleanly reverts Sentinel-installed trust anchors, browser policy keys, NSS modules, and systemd services.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 2. PREREQUISITES --- */}
      <section id="prerequisites" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          System Requirements & Distribution Support
        </h2>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50 mb-6">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Component</th>
                <th className="py-3 px-4">Minimum Version</th>
                <th className="py-3 px-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Linux Kernel</td>
                <td className="py-3 px-4 font-mono text-sky-400">5.4+</td>
                <td className="py-3 px-4 text-slate-400">USB CCID smart card class driver enabled</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Python</td>
                <td className="py-3 px-4 font-mono text-sky-400">3.10+</td>
                <td className="py-3 px-4 text-slate-400">Standard runtime with PyGObject and cryptography</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">PC/SC Daemon</td>
                <td className="py-3 px-4 font-mono text-sky-400">1.8+</td>
                <td className="py-3 px-4 text-slate-400">Active pcscd service and pcscd.socket</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">OpenSC</td>
                <td className="py-3 px-4 font-mono text-sky-400">0.20+</td>
                <td className="py-3 px-4 text-slate-400">PKCS#11 middleware provider library (opensc-pkcs11.so)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-sm text-slate-400">
          <strong className="text-slate-200 block mb-2 font-base">Multi-Distribution Verification Matrix:</strong>
          <p className="mb-2">Hardware-validated on physical machines running <strong className="text-white">Fedora 39 / 40 / 41</strong>, <strong className="text-white">RHEL 9+</strong>, and <strong className="text-white">Ubuntu 22.04 / 24.04 LTS</strong>.</p>
          <p>Includes complete platform abstraction layers and package resolution logic for <strong className="text-white">Arch Linux</strong> and <strong className="text-white">openSUSE Tumbleweed</strong>.</p>
        </div>
      </section>

      {/* --- 3. INSTALLATION --- */}
      <section id="installation" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6">Installation</h2>

        <div className="space-y-6">
          {/* Quick Install */}
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              Option A: Universal Auto-Installer <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-500/20 font-sans font-semibold">Recommended</span>
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Installs dependencies, builds the native Rust accelerator, sets up desktop integration, and configures Polkit helpers:
            </p>
            <div className="bg-[#050608] p-4 rounded-lg font-mono text-sm border border-slate-800 text-sky-400 overflow-x-auto select-all">
              <code>curl -fsSL https://snl.codefxr.com/install | bash</code>
            </div>
          </div>

          {/* Headless / Server */}
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">Option B: Unattended & Headless Installation</h3>
            <p className="text-sm text-slate-400 mb-4">
              For remote servers, SSH workstations, or automated container provisioning without graphical displays:
            </p>
            <div className="bg-[#050608] p-4 rounded-lg font-mono text-sm border border-slate-800 text-slate-200 overflow-x-auto select-all">
              <code>curl -fsSL https://snl.codefxr.com/install | bash -s -- --cli</code>
            </div>
          </div>

          {/* Offline Release */}
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">Option C: Pre-Packaged Offline Release Archive</h3>
            <p className="text-sm text-slate-400 mb-3">
              Download the standalone offline bundle (<code className="text-slate-300 font-mono text-xs">Sentinel-CAC-Manager.tar.gz</code>) from GitHub Releases and verify its SHA-256 digest:
            </p>
            <pre className="bg-[#050608] p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800 leading-relaxed">
{`echo "cd788e44603bd669468f5c82d33417ae1f75324a48e01aa70b1a746cc8bdbbe3  Sentinel-CAC-Manager.tar.gz" | sha256sum -c -
tar -xzf Sentinel-CAC-Manager.tar.gz
cd Sentinel-CAC-Manager
./install`}
            </pre>
          </div>

          {/* Clone from Git */}
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">Option D: Clone from Repository</h3>
            <pre className="bg-[#050608] p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800 leading-relaxed">
{`git clone --branch v2.0.3 https://github.com/CodeFXR/Sentinel.git
cd Sentinel
./install`}
            </pre>
          </div>
        </div>
      </section>

      {/* --- 4. USAGE --- */}
      <section id="usage" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-sky-400" /> Usage: Workspaces & CLI Reference
        </h2>

        {/* Workspaces */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-400" /> 1. Dashboard
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time hardware status of USB readers, inserted smart card ATR, cardholder EDIPI, and daemon service state.
            </p>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-400" /> 2. Card Inspector
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Detailed certificate viewer for PIV Authentication, Email Signature, and Encryption certificates with cryptographic OCSP checking.
            </p>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-amber-400" /> 3. Browser Health
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Profile-by-profile verification of Firefox enterprise policies and Chrome/Chromium NSS security module registration.
            </p>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-400" /> 4. System Diagnostics
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Operating system detection, dependency integrity verification, and one-click Polkit repair actions.
            </p>
          </div>
        </div>

        {/* Command-Line Reference Table */}
        <h3 className="text-lg font-bold text-white mb-4">Command-Line Interface</h3>
        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50 mb-8">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Command</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel</td>
                <td className="py-2.5 px-4 text-slate-300">Launch the Libadwaita graphical user interface</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --status</td>
                <td className="py-2.5 px-4 text-slate-300">Display full system diagnostics, middleware health, and card status</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --setup-all</td>
                <td className="py-2.5 px-4 text-slate-300">Run complete automated configuration (services, CAs, browsers)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --card-info</td>
                <td className="py-2.5 px-4 text-slate-300">Display holder name, EDIPI, issuer, and validity dates of inserted CAC</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --pin-status</td>
                <td className="py-2.5 px-4 text-slate-300">Display PIV PIN retry counter and card lock state</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --change-pin</td>
                <td className="py-2.5 px-4 text-slate-300">Interactively change PIV smart card PIN (zeroizes native Rust APDU buffers)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --lock-on-removal</td>
                <td className="py-2.5 px-4 text-slate-300">Enable automatic desktop screen lock when card is removed</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --no-lock-on-removal</td>
                <td className="py-2.5 px-4 text-slate-300">Disable automatic desktop screen lock on card removal</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --agent</td>
                <td className="py-2.5 px-4 text-slate-300">Run background card event daemon for desktop insert/removal notifications</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --install-agent</td>
                <td className="py-2.5 px-4 text-slate-300">Install and enable systemd user service for automated card monitoring</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --browsers</td>
                <td className="py-2.5 px-4 text-slate-300">Configure Firefox policies and Chrome/Chromium NSS databases only</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --certs</td>
                <td className="py-2.5 px-4 text-slate-300">Install verified DoD Root CAs into operating system trust store only</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --reader-fix</td>
                <td className="py-2.5 px-4 text-slate-300">Apply OpenSC Broadcom reader driver hang fix</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --check-update</td>
                <td className="py-2.5 px-4 text-slate-300">Check GitHub Releases for a newer SHA-256 verified release</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-sky-400 font-semibold">sentinel --update</td>
                <td className="py-2.5 px-4 text-slate-300">Download and apply SHA-256 verified update with transactional rollback</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono text-red-400 font-semibold">sentinel --uninstall</td>
                <td className="py-2.5 px-4 text-slate-300">Revert Sentinel-managed trust anchors, policies, and browser modules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 5. TROUBLESHOOTING --- */}
      <section id="troubleshooting" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-400" /> Troubleshooting & Diagnostics
        </h2>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50 mb-8">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Symptom</th>
                <th className="py-3 px-4">Probable Cause</th>
                <th className="py-3 px-4">Resolution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              <tr>
                <td className="py-3 px-4 font-semibold text-white">No smart card readers found</td>
                <td className="py-3 px-4 text-slate-400">pcscd daemon inactive or CCID driver missing</td>
                <td className="py-3 px-4 text-sky-400 font-mono">sentinel --setup-all</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Broadcom reader hangs for 30s</td>
                <td className="py-3 px-4 text-slate-400">OpenSC probing contactless drivers</td>
                <td className="py-3 px-4 text-sky-400 font-mono">sentinel --reader-fix</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Firefox fails to prompt for PIN</td>
                <td className="py-3 px-4 text-slate-400">Profile policies.json missing PKCS#11 module</td>
                <td className="py-3 px-4 text-sky-400 font-mono">sentinel --browsers</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Chrome / Edge does not detect CAC</td>
                <td className="py-3 px-4 text-slate-400">NSS DB locked while browser was open</td>
                <td className="py-3 px-4 text-slate-300">Close Chrome completely, then run <code className="text-sky-400 font-mono">sentinel --browsers</code></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Certificate untrusted in browser</td>
                <td className="py-3 px-4 text-slate-400">DoD root CA chain missing from NSS/system</td>
                <td className="py-3 px-4 text-sky-400 font-mono">sentinel --certs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Polkit dialog fails to open</td>
                <td className="py-3 px-4 text-slate-400">Polkit agent missing in minimal window manager</td>
                <td className="py-3 px-4 text-slate-300">Run via <code className="text-sky-400 font-mono">sudo ./install</code> in terminal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
          <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-sky-400" /> Technical Limitations & Constraints
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><strong className="text-slate-200">PIV Applet PIN Change:</strong> Uses NIST SP 800-73-4 <code className="text-slate-300 font-mono text-xs">CHANGE REFERENCE DATA</code> APDUs in an exclusive PC/SC transaction; zeroizes native Rust APDU buffers immediately. Requires confirmation at 2 retries and blocks at 1 retry for card safety.</li>
            <li><strong className="text-slate-200">OCSP Revocation Checking:</strong> Verifies leaf signatures against DoD CAs, responder signatures, EKU flags, CertID hashes, and freshness windows. Some DoD OCSP endpoints require NIPRNet or DoD VPN access.</li>
            <li><strong className="text-slate-200">Firefox Enterprise Policy Deployment:</strong> Sets <code className="text-slate-300 font-mono text-xs">ImportEnterpriseRoots: true</code> and mounts <code className="text-slate-300 font-mono text-xs">DoD_Full_Chain.pem</code> so .mil servers omitting intermediate CAs still chain cleanly to DoD Roots.</li>
            <li><strong className="text-slate-200">Linux Platform Exclusivity:</strong> Architected specifically for Linux distributions; macOS and Windows are unsupported by design.</li>
          </ul>
        </div>
      </section>

      {/* --- 6. GITHUB REPOSITORY CONTAINER --- */}
      <div className="baseball-card bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-sky-500/50 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.3)] transition-all mt-16">
        {/* Watermark in top-right corner */}
        <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-30 transition-all duration-500 rotate-12 group-hover:rotate-0 pointer-events-none">
          <Image
            src="/sentinel.png"
            alt="Sentinel Logo"
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
            Sentinel Repository
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-base max-w-xl">
            Explore the open-source Rust APDU core and Libadwaita desktop implementation, download verified release archives, submit bug reports, or contribute to Sentinel on GitHub.
          </p>

          <div>
            <Link
              href="https://github.com/CodeFXR/Sentinel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2.5 rounded-lg bg-white text-slate-950 font-bold transition-all duration-300 hover:bg-sky-400 hover:text-slate-950 hover:shadow-lg cursor-pointer">
                GitHub Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
