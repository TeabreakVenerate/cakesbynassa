
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = { title: 'Menu | CSS Depth Prototype' };

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
        {products.map((product) => (
          <div key={product.id} className="group relative h-96 [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-[#3A3A3C]/5 overflow-hidden [backface-visibility:hidden]">
              <div className="relative h-3/5 w-full bg-[#FAF8F5]">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-[#D68E5E] mb-1">{product.category}</div>
                <h3 className="text-xl font-bold tracking-tight mb-2 truncate">{product.name}</h3>
                <div className="font-medium text-[#3A3A3C]/60">₦{product.price.toLocaleString()}</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-[#3A3A3C]/5 p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">{product.name}</h3>
                <p className="text-[#3A3A3C]/80 font-medium leading-relaxed mb-6">{product.description}</p>
                <div className="text-sm text-[#3A3A3C]/60 mb-2">Size: {product.size}</div>
                <div className="text-sm text-[#3A3A3C]/60">Serves: {product.serves}</div>
              </div>
              <WhatsAppButton productName={product.name} price={product.price} className="w-full py-4 bg-[#D68E5E] text-white rounded-2xl font-semibold text-center hover:bg-[#c27c4d] active:scale-95 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
