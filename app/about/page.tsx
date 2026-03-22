import Image from "next/image";
import Link from "next/link";
import { Github, LayoutGrid, Info, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900 overflow-x-hidden flex flex-col">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
             <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">CodeFXR</span>
          </Link>
          
          <div className="flex items-center gap-4 md:gap-6 text-slate-400">
            <Link 
              href="/#products" 
              className="hover:text-green-400 transition-colors"
              aria-label="Applications"
            >
              <LayoutGrid className="w-5 h-5" />
            </Link>
            <Link 
              href="https://github.com/CodeFXR/codefxr.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Content --- */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-40 pb-32 max-w-3xl mx-auto text-center">
        
        {/* Glowing Logo */}
        <div className="relative w-28 h-28 mb-10 mx-auto">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
          <Image src="/logo.png" alt="CodeFXR Logo" fill className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] relative z-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Bridging the gap between <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-400">
            raw power and ease of use
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 leading-relaxed mb-8">
          As the Linux desktop gains momentum, CodeFXR aims at developing terminal applications for both new and advanced users.
        </p>
        
        <p className="text-xl text-slate-400 leading-relaxed mb-16">
          By unifying existing command-line tools, we deliver intuitive workflows designed to scale from personal use to enterprise-level environments.
        </p>
        
        <Link href="https://www.linkedin.com/company/codefxr/" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3.5 rounded-lg font-bold bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(10,102,194,0.4)]">
            <Linkedin className="w-5 h-5" />
            Follow CodeFXR on LinkedIn
          </button>
        </Link>
      </div>

      {/* --- Footer --- */}
      <footer className="py-10 border-t border-slate-900 bg-slate-950 flex flex-col items-center justify-center gap-6 mt-auto">
        <div className="flex items-center gap-6 text-slate-500">
          <Link href="/about" aria-label="About CodeFXR" className="text-white transition-colors">
            <Info className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/codefxr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} CodeFXR. All rights reserved.</p>
      </footer>
    </main>
  );
}