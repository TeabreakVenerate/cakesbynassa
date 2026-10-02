
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Home | Lookbook Prototype' };

export default function Page() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[85vh]">
      <div className="w-full md:w-[60%] h-[50vh] md:h-auto relative bg-[#f5f5f5]">
        <Image src="/images/hero/hero-texture.png" alt="Editorial cover" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" priority />
      </div>
      <div className="w-full md:w-[40%] flex flex-col justify-center px-12 py-24 md:py-[120px]">
        <h1 className="font-lora text-6xl md:text-[72px] leading-[1.1] mb-8">{copy.brand}</h1>
        <p className="text-[14px] leading-[1.8] text-[#000000]/80 mb-12 max-w-sm">
          {copy.tagline}. We bake fresh daily on Airport Road, Benin City. Pre-order celebration cakes 24 hours in advance.
        </p>
        <Link href="/lookbook/menu" className="inline-block border border-[#000000] px-8 py-4 uppercase tracking-[0.15em] text-[12px] font-medium text-center hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors w-fit">
          View the collection
        </Link>
      </div>
    </section>
  );
}
