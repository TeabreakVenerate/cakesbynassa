
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';


export const metadata: Metadata = { title: 'Custom Order | Warm Kitchen Prototype' };

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-16 bg-[#1C1C1C] text-[#E8E0D4] rounded-[12px] mt-12">
      <h2 className="text-3xl font-bold mb-6 text-[#B8956A]">Request a custom cake</h2>
      <p className="mb-8 text-[#E8E0D4]/80">Need a specific flavor or design? Send us your requirements and we will confirm the details.</p>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Date needed" className="bg-transparent border border-[#E8E0D4]/20 rounded-[8px] px-4 py-3 text-[#E8E0D4] focus:outline-none focus:border-[#B8956A] transition-colors" />
        <textarea placeholder="Flavor and design ideas" rows={4} className="bg-transparent border border-[#E8E0D4]/20 rounded-[8px] px-4 py-3 text-[#E8E0D4] focus:outline-none focus:border-[#B8956A] transition-colors"></textarea>
        <a href={copy.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#B8956A] text-[#1C1C1C] px-8 py-4 rounded-[8px] font-bold text-center mt-4 hover:bg-[#a38055] transition-colors active:scale-95">Send request</a>
      </div>
    </section>
  );
}
