
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';


export const metadata: Metadata = { title: 'Home | Warm Kitchen Prototype' };

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-16 min-h-[70vh]">
      <div className="w-full md:w-[55%] relative h-[60vh] rounded-[12px] overflow-hidden">
        <Image src="/images/hero/kitchen-atmosphere.png" alt="Bakery atmosphere" fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" priority />
      </div>
      <div className="w-full md:w-[45%] flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-[#1C1C1C]">{copy.tagline}</h1>
        <p className="text-lg text-[#1C1C1C]/80 mb-8 max-w-md leading-relaxed">
          We bake fresh cakes and pastries every morning. You can pick up daily items or request a custom cake for your next event.
        </p>
        <a href={copy.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#4A5D3A] text-[#E8E0D4] px-8 py-4 rounded-[8px] font-bold text-lg hover:bg-[#3A492D] transition-colors active:scale-95">
          Message us on WhatsApp
        </a>
      </div>
    </section>
  );
}
