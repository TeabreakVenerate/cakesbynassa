
import Link from 'next/link';
import { copy } from '@/data/copy';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-inter pb-32">
      <nav className="w-full py-8 border-b border-[#000000]/10 flex justify-center gap-12 text-[13px] tracking-[0.2em] uppercase font-medium flex-wrap px-4">
        <Link href="/lookbook" className="hover:text-[#7A8FA6] transition-colors">Home</Link>
        <Link href="/lookbook/menu" className="hover:text-[#7A8FA6] transition-colors">Collection</Link>
        <Link href="/lookbook/custom" className="hover:text-[#7A8FA6] transition-colors">Commissions</Link>
        <Link href="/lookbook/contact" className="hover:text-[#7A8FA6] transition-colors">Visit</Link>
      </nav>
      {children}
    </div>
  );
}
