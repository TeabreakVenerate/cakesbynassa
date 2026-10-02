
import Link from 'next/link';
import { copy } from '@/data/copy';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E8E0D4] text-[#1C1C1C] font-nunito pb-24 selection:bg-[#4A5D3A] selection:text-[#E8E0D4]">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href="/warm-kitchen" className="text-2xl font-black tracking-tight">{copy.brand}</Link>
        <div className="flex gap-8 text-[#4A5D3A] font-semibold">
          <Link href="/warm-kitchen/menu" className="hover:text-[#1C1C1C] transition-colors">Menu</Link>
          <Link href="/warm-kitchen/custom" className="hover:text-[#1C1C1C] transition-colors">Custom Order</Link>
          <Link href="/warm-kitchen/contact" className="hover:text-[#1C1C1C] transition-colors">Contact</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
