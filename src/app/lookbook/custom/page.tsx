
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Commissions | Lookbook Prototype' };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-12 py-24">
      <h2 className="font-lora text-4xl mb-8">Commissions</h2>
      <p className="text-[14px] leading-[1.8] text-[#000000]/80 mb-12 max-w-lg">
        For events requiring specific flavor profiles and aesthetic direction, we accept custom requests. Please provide at least 24 hours notice.
      </p>
      <div className="space-y-8 max-w-lg">
        <input type="text" placeholder="Event Date" className="w-full border-b border-[#000000]/20 py-3 bg-transparent focus:outline-none focus:border-[#7A8FA6] text-[14px]" />
        <textarea placeholder="Vision & Details" rows={4} className="w-full border-b border-[#000000]/20 py-3 bg-transparent focus:outline-none focus:border-[#7A8FA6] text-[14px] resize-none"></textarea>
        <a href={copy.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[13px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#000000] hover:text-[#7A8FA6] hover:border-[#7A8FA6] transition-colors">
          Contact via WhatsApp
        </a>
      </div>
    </section>
  );
}
