
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';


export const metadata: Metadata = { title: 'Menu | Warm Kitchen Prototype' };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-16 text-[#4A5D3A]">Menu</h2>
      <div className="flex flex-col gap-12">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col sm:flex-row gap-8 items-center bg-[#1C1C1C]/5 p-6 rounded-[12px]">
            <div className="relative w-full sm:w-48 h-48 shrink-0 rounded-[8px] overflow-hidden">
              <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, 192px" className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <span className="text-xl font-bold text-[#4A5D3A]">₦{product.price.toLocaleString()}</span>
              </div>
              <div className="text-sm font-semibold text-[#B8956A] mb-3">{product.category} • {product.size} • Serves {product.serves}</div>
              <p className="text-[#1C1C1C]/70 mb-6 leading-relaxed">{product.description}</p>
              <WhatsAppButton productName={product.name} price={product.price} className="inline-block border-2 border-[#1C1C1C] text-[#1C1C1C] px-6 py-2 rounded-[8px] font-bold hover:bg-[#1C1C1C] hover:text-[#E8E0D4] transition-colors active:scale-95" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
