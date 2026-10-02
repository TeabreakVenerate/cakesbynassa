import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { deliveryZones } from '@/data/delivery-zones';

export function BentoGrid() {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-inter pb-24">
      {/* Sticky Top Filter Nav */}
      <nav className="sticky top-0 z-40 bg-[#F4F4F5]/80 backdrop-blur-xl border-b border-[#18181B]/5 px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-bold text-xl tracking-tight">{copy.brand}</div>
        <div className="flex gap-2 overflow-x-auto w-full sm:w-auto hide-scrollbar pb-1 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${
                filter === cat 
                  ? 'bg-[#18181B] text-white' 
                  : 'bg-white border border-[#18181B]/10 hover:border-[#18181B]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Bento Grid */}
      <main className="p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-4">
          
          {/* Brand Intro Tile - Only show when 'All' is selected */}
          {filter === 'All' && (
            <div className="col-span-2 md:col-span-2 row-span-1 bg-white rounded-2xl p-8 flex flex-col justify-center border border-[#18181B]/5 shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{copy.tagline}</h1>
              <p className="text-[#18181B]/60 max-w-md">{copy.location}. {copy.orderingInfo}</p>
            </div>
          )}

          {filteredProducts.map((product, i) => {
            // Apply bento layout rules if viewing all
            const isFirstProduct = filter === 'All' && i === 0;
            const isSecondProduct = filter === 'All' && i === 1;
            
            let gridClass = 'col-span-1 row-span-1';
            if (isFirstProduct) gridClass = 'col-span-2 md:col-span-1 row-span-1 md:row-span-2';
            if (isSecondProduct) gridClass = 'col-span-1 row-span-1 md:col-span-2 md:row-span-1';

            return (
              <div 
                key={product.id} 
                className={`group relative rounded-2xl overflow-hidden bg-white border border-[#18181B]/5 shadow-sm ${gridClass}`}
              >
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Frosted Glass Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md p-4 border-t border-white/20 transform translate-y-0 transition-transform">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-bold text-sm md:text-base leading-tight truncate">{product.name}</h3>
                    <span className="font-bold text-[#F0625D] text-sm shrink-0">₦{product.price.toLocaleString()}</span>
                  </div>
                  <div className="text-[11px] text-[#18181B]/60 uppercase tracking-wider mb-3">
                    {product.size}
                  </div>
                  <WhatsAppButton 
                    productName={product.name} 
                    price={product.price}
                    className="block w-full py-2 bg-[#18181B] text-white text-xs font-bold rounded-lg text-center active:scale-95 transition-transform"
                  >
                    Order Now
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Info Section */}
      <section className="p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-[#18181B]/5 shadow-sm">
          <h3 className="font-bold mb-4">Delivery Zones</h3>
          <div className="space-y-2 text-sm">
            {deliveryZones.map(zone => (
              <div key={zone.name} className="flex justify-between border-b border-[#18181B]/5 pb-2">
                <span className="text-[#18181B]/70">{zone.name}</span>
                <span className="font-medium">₦{zone.fee.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[13px] font-medium text-[#F0625D]">{copy.payment}</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-[#18181B]/5 shadow-sm flex flex-col justify-center">
          <h3 className="font-bold mb-2">Custom Inquiries</h3>
          <p className="text-sm text-[#18181B]/70 mb-6">Send us a message with your event date and requirements.</p>
          <a 
            href={copy.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 border-2 border-[#18181B] text-[#18181B] text-sm font-bold rounded-xl text-center hover:bg-[#18181B] hover:text-white transition-colors active:scale-95"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
