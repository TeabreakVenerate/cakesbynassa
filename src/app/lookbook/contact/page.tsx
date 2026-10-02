
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Visit | Lookbook Prototype' };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-12 py-24">
      <h2 className="font-lora text-4xl mb-16">Visit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[14px] leading-[1.8]">
        <div>
          <div className="font-medium mb-6 uppercase tracking-wider text-[12px] text-[#7A8FA6]">Location</div>
          <p className="text-[#000000] text-lg mb-2">{copy.location}</p>
          <p className="text-[#000000]/80 mb-6">Mon - Sat, 9:00 - 18:00</p>
          <a href={copy.whatsappLink} className="text-[#000000] border-b border-[#000000] pb-1 uppercase tracking-widest text-[12px] hover:text-[#7A8FA6] hover:border-[#7A8FA6] transition-all">Message Us</a>
        </div>
        <div>
          <div className="font-medium mb-6 uppercase tracking-wider text-[12px] text-[#7A8FA6]">Delivery</div>
          <div className="space-y-4 text-[#000000]/80">
            {deliveryZones.map(zone => (
              <div key={zone.name} className="flex justify-between border-b border-[#000000]/10 pb-2">
                <span>{zone.name}</span>
                <span>₦{zone.fee.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[#000000] font-medium italic">{copy.payment}</p>
        </div>
      </div>
    </section>
  );
}
