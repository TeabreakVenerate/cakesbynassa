
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Custom Order | CSS Depth Prototype' };

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 flex flex-col items-center transform transition-transform border border-[#3A3A3C]/10">
        <div className="w-full text-left">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Custom Inquiry</h2>
          <p className="text-[#3A3A3C]/60 mb-8">Tell us what you need and we will confirm over WhatsApp.</p>
          <input type="text" placeholder="Date of Event" className="w-full bg-[#FAF8F5] px-4 py-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#D68E5E] transition-all" />
          <textarea placeholder="Flavor, size, and design notes" rows={6} className="w-full bg-[#FAF8F5] px-4 py-4 rounded-xl mb-8 focus:outline-none focus:ring-2 focus:ring-[#D68E5E] transition-all"></textarea>
          <a href={copy.whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-[#D68E5E] text-white rounded-2xl font-semibold text-center hover:bg-[#c27c4d] active:scale-95 transition-all">Message Bakery</a>
        </div>
      </div>
    </div>
  );
}
