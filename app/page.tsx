import Image from "next/image";
import Link from "next/link";
// Keeping imports just in case
import { ArrowRight, Terminal, Share2, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="relative z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
             <Image 
               src="/logo.png" 
               alt="CodeFXR Logo" 
               fill 
               className="object-contain"
             />
            </div>
            <span className="text-xl font-bold tracking-tight">CodeFXR</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#products" className="hover:text-green-400 transition-colors">Applications</Link>
            <Link 
              href="https://github.com/CodeFXR/codefxr.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 max-w-5xl mx-auto">
        
        {/* Badge */}
        <div className="mb-8 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-slate-900 hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] cursor-default">
          <span className="text-xs font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Unleash your terminal!
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          The Foundation for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-400">
            Terminal User Interfaces
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          CodeFXR provides the essential suite of applications for ease of use of native tools.
        </p>

        <div className="flex gap-4">
          {/* Get Started Button */}
          <Link href="/get-started">
            <button className="px-8 py-3 rounded-lg font-bold bg-white text-slate-950 hover:bg-green-400 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]">
              Get Started
            </button>
          </Link>
          
          {/* Documentation Button */}
          <Link href="/docs/synapxis">
            <button className="px-8 py-3 rounded-lg font-bold border border-slate-700 hover:border-blue-500 text-white hover:bg-slate-900 transition-all duration-300">
              View Documentation
            </button>
          </Link>
        </div>
      </section> 

      {/* --- Products Section --- */}
      <section id="products" className="px-6 py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Suite</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1: CLI-Studio (Cyan Theme) */}
            <ProductCard 
              icon={
                <Image 
                  src="/logo1.png" 
                  alt="CLI-Studio Icon" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              }
              title="CLI▶Studio"
              description="Image, video and audio manipulation."
              color="green"
            />

            {/* Product 2: Synapxis (Amber Theme) */}
            <ProductCard 
              icon={
                <Image 
                  src="/logo2.png" 
                  alt="Synapxis Icon" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              }
              title="Synapxis"
              description="Graph view interface with jrnl integration."
              color="amber"
            />

            {/* Product 3: LXM (Blue Theme) */}
            <ProductCard 
              icon={
                <Image 
                  src="/logo3.png" 
                  alt="LXM Icon" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              }
              title="LXM"
              description="Linux manual pages search and command builder."
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} CodeFXR. All rights reserved.</p>
      </footer>
    </main>
  );
}

// ProductCard with Colored Card Shadow Logic
function ProductCard({ icon, title, description, color }: any) {
  
  // Define styles for each color theme
  const theme = {
    green: {
      // NEW: Green border and Green glow
      styles: "group-hover:border-green-500/50 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]"
    },
    cyan: {
      // Cyan border and Cyan glow on the CARD itself
      styles: "group-hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]"
    },
    amber: {
      // Amber border and Amber glow on the CARD itself
      styles: "group-hover:border-amber-500/50 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
    },
    blue: {
      // Blue border and Blue glow on the CARD itself
      styles: "group-hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
    },
  }[color as "green" | "cyan" | "amber" | "blue"] || { 
    styles: "group-hover:border-white hover:shadow-xl" 
  };

  return (
    <div className={`group p-8 rounded-2xl bg-slate-950 border border-slate-800 ${theme.styles} transition-all duration-300 hover:-translate-y-1`}>
      <div className="mb-4 p-3 bg-slate-900/50 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        {title}
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
