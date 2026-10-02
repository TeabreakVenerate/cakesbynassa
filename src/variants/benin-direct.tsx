import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Lock, Phone, MessageCircle } from 'lucide-react';

export function BeninDirect() {
  const [selectedZone, setSelectedZone] = useState(deliveryZones[0].name);
  const activeFee = deliveryZones.find(z => z.name === selectedZone)?.fee || 0;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#333333] pb-24" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#333333]/10 h-[48px] px-4 flex justify-between items-center shadow-sm">
        <div className="font-bold text-lg">{copy.brand}</div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#1B5E20]">
          <Phone size={16} />
          {copy.whatsapp}
        </div>
      </nav>

      {/* Compact Hero */}
      <section className="px-4 py-8 max-h-[40vh] flex flex-col items-center justify-center text-center bg-[#f8f9fa] border-b border-[#333333]/5">
        <h1 className="text-3xl font-extrabold mb-2 text-[#333333]">{copy.tagline}</h1>
        <p className="text-sm text-[#333333]/70 mb-6 max-w-sm mx-auto">
          Fresh pastries and celebration cakes in Benin City. Pre-order 24h in advance.
        </p>
        <a 
          href={copy.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs bg-[#1B5E20] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 active:bg-[#144718]"
        >
          <MessageCircle size={20} />
          Order on WhatsApp
        </a>
      </section>

      {/* Simple Row Menu */}
      <main className="max-w-3xl mx-auto">
        <section className="px-4 py-6">
          <h2 className="text-xl font-bold mb-4 border-b border-[#333333]/10 pb-2">Our Menu</h2>
          <div className="flex flex-col">
            {products.map((product) => (
              <div key={product.id} className="flex items-center py-4 border-b border-[#333333]/5 gap-4">
                <div className="relative w-[80px] h-[80px] shrink-0 rounded bg-[#f8f9fa] overflow-hidden">
                  <Image src={product.image} alt={product.name} fill sizes="80px" loading="lazy" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base truncate">{product.name}</h3>
                  <div className="text-xs text-[#333333]/60 mb-1">{product.size} • {product.category}</div>
                  <div className="font-bold text-[#1B5E20]">₦{product.price.toLocaleString()}</div>
                </div>
                <div className="shrink-0">
                  <WhatsAppButton 
                    productName={product.name} 
                    price={product.price}
                    className="p-3 bg-[#e8f5e9] text-[#1B5E20] rounded-full flex items-center justify-center active:bg-[#c8e6c9]"
                  >
                    <MessageCircle size={20} />
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery & Trust */}
        <section className="px-4 py-6 bg-[#f8f9fa] mt-4">
          <h2 className="text-lg font-bold mb-4">Delivery Calculator</h2>
          <div className="bg-white p-4 rounded-lg border border-[#333333]/10 shadow-sm">
            <label className="block text-sm font-medium mb-2 text-[#333333]/80">Select your area in Benin:</label>
            <select 
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full border border-[#333333]/20 rounded p-2 mb-4 bg-white"
            >
              {deliveryZones.map(zone => (
                <option key={zone.name} value={zone.name}>{zone.name}</option>
              ))}
            </select>
            <div className="flex justify-between items-center text-lg">
              <span className="font-medium text-[#333333]/80">Delivery Fee:</span>
              <span className="font-bold">₦{activeFee.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 bg-[#e8f5e9] rounded-lg text-[#1B5E20]">
            <Lock size={24} className="shrink-0 mt-0.5" />
            <div>
              <div className="font-bold">Pay on Delivery</div>
              <div className="text-sm mt-1">Pay with cash or transfer when your order arrives at the gate.</div>
            </div>
          </div>
        </section>
      </main>

      {/* Pinned Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#333333]/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 pb-20">
        <a 
          href={copy.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-3xl mx-auto bg-[#1B5E20] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 active:bg-[#144718]"
        >
          <MessageCircle size={24} />
          Message us to order
        </a>
      </div>
    </div>
  );
}
