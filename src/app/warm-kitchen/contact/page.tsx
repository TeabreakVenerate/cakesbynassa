
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';


export const metadata: Metadata = { title: 'Contact | Warm Kitchen Prototype' };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-16">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-[#4A5D3A]">Delivery Zones</h2>
        <div className="flex flex-col gap-3">
          {deliveryZones.map(zone => (
            <div key={zone.name} className="flex justify-between py-2 border-b border-[#1C1C1C]/10">
              <span>{zone.name}</span>
              <span className="font-bold">₦{zone.fee.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-[#B8956A]/20 rounded-[8px] font-semibold text-[#1C1C1C]">{copy.payment}</div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-[#4A5D3A]">Visit Us</h2>
        <p className="mb-2">{copy.location}</p>
        <p className="mb-8">Open Monday to Saturday, 9am - 6pm</p>
        <p className="font-bold text-xl">{copy.whatsapp}</p>
      </div>
    </section>
  );
}
