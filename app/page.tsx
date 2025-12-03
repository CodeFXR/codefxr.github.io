import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Share2, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-green-500 selection:text-slate-900">
      
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Ensure you have a logo.png in your 'public' folder */}
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
          <Link href="#products" className="hover:text-green-400 transition-colors">Products</Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 max-w-5xl mx-auto">
        
        {/* Animated Badge */}
        <div className="mb-6 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Unleash your terminal!
          </span>
        </div>

        {/* Main Title with Gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The Foundation for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-400">
            Terminal User Interface
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          CodeFXR provides the essential suite of applications for ease of use of native tools.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 rounded-lg font-bold bg-white text-slate-950 hover:bg-green-400 transition-all duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-lg font-bold border border-slate-700 hover:border-blue-500 text-white hover:bg-slate-900 transition-all duration-300">
            View Documentation
          </button>
        </div>
      </section>

      {/* --- Products Section --- */}
      <section id="products" className="px-6 py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">App Suite</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1: CLI-Studio */}
            <ProductCard 
              icon={<Terminal className="w-8 h-8 text-blue-400" />}
              title="CLI▶Studio"
              description="User interface for image, video and audio manipulation."
              color="blue"
            />

            {/* Product 2: Synapxis */}
            <ProductCard 
              icon={<Share2 className="w-8 h-8 text-teal-400" />}
              title="Synapxis"
              description="Graph view user interface with jrnl integration."
              color="teal"
            />

            {/* Product 3: LXM */}
            <ProductCard 
              icon={<Layers className="w-8 h-8 text-green-400" />}
              title="LXM"
              description="Linux manual pages user interface, search and command builder."
              color="green"
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

// Simple Component for the Product Cards to keep code clean
function ProductCard({ icon, title, description, color }: any) {
  // We dynamically set the border hover color based on props
  const hoverColor = {
    blue: "group-hover:border-blue-500/50",
    teal: "group-hover:border-teal-500/50",
    green: "group-hover:border-green-500/50",
  }[color as "blue" | "teal" | "green"] || "group-hover:border-white";

  return (
    <div className={`group p-8 rounded-2xl bg-slate-950 border border-slate-800 ${hoverColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
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