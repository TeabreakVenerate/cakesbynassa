
import Link from 'next/link';
import { copy } from '@/data/copy';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A3A3C] font-sans selection:bg-[#D68E5E] selection:text-white pb-32">
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/80 backdrop-blur-xl border-b border-[#3A3A3C]/10 px-6 py-4 flex flex-wrap gap-4 justify-between items-center transition-all">
        <Link href="/css-depth" className="font-semibold text-lg tracking-tight">{copy.brand}</Link>
        <div className="flex gap-4">
          <Link href="/css-depth/menu" className="text-[#3A3A3C] font-medium active:opacity-50 hover:text-[#D68E5E]">Menu</Link>
          <Link href="/css-depth/custom" className="text-[#D68E5E] font-medium active:opacity-50">Custom</Link>
          <Link href="/css-depth/contact" className="text-[#3A3A3C] font-medium active:opacity-50 hover:text-[#D68E5E]">Contact</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
