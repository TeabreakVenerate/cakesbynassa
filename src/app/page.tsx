import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Cakesbynessahh</h1>
        <p className="text-white/60 mb-12 text-lg">Select a prototype to review the full build.</p>
        
        <div className="flex flex-col gap-4">
          <Link 
            href="/warm-kitchen"
            className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors flex justify-between items-center group"
          >
            <div className="text-left">
              <h2 className="text-xl font-bold text-[#B8956A]">Warm Kitchen</h2>
              <p className="text-sm text-white/50 mt-1">Olive & brass palette, asymmetrical layout.</p>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>

          <Link 
            href="/css-depth"
            className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors flex justify-between items-center group"
          >
            <div className="text-left">
              <h2 className="text-xl font-bold text-[#D68E5E]">CSS Depth</h2>
              <p className="text-sm text-white/50 mt-1">Apple-style fluid depth, 3D CSS transforms.</p>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>

          <Link 
            href="/lookbook"
            className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors flex justify-between items-center group"
          >
            <div className="text-left">
              <h2 className="text-xl font-bold text-[#7A8FA6]">Lookbook</h2>
              <p className="text-sm text-white/50 mt-1">Magazine editorial, scroll-triggered reveals.</p>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
