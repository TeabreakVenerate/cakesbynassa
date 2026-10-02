
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Home | CSS Depth Prototype' };

export default function Page() {
  return (
    <section className="w-full overflow-hidden perspective-[1200px] h-[70vh] relative flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-40">
         <Image src="/images/hero/kitchen-atmosphere.png" alt="Background" fill sizes="100vw" className="object-cover blur-sm" priority />
      </div>
      <div className="relative z-10 p-12 text-center" style={{ transform: 'translateZ(100px)' }}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{copy.tagline}</h1>
        <p className="text-xl md:text-2xl font-medium text-[#3A3A3C]/80">Fresh daily on Airport Road</p>
      </div>
    </section>
  );
}
