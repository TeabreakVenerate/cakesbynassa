
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Contact | CSS Depth Prototype' };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-[#3A3A3C]/10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Delivery</h2>
          <div className="space-y-4">
            {deliveryZones.map(zone => (
              <div key={zone.name} className="flex justify-between text-[#3A3A3C]/80 border-b border-[#3A3A3C]/5 pb-2">
                <span>{zone.name}</span>
                <span className="font-medium text-[#3A3A3C]">₦{zone.fee.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm font-semibold text-[#D68E5E] p-4 bg-[#FAF8F5] rounded-xl">{copy.payment}</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Location</h2>
          <p className="text-[#3A3A3C]/80 mb-2 text-lg">{copy.location}</p>
          <p className="font-medium text-xl mb-8">{copy.whatsapp}</p>
          <a href={copy.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block py-3 px-8 bg-[#3A3A3C] text-white rounded-xl font-semibold hover:bg-black active:scale-95 transition-all">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
