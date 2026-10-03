'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import { copy } from '@/data/copy';

export default function MasterPrototype() {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-nunito bg-[#FAF8F5] antialiased">
      
      {/* NAVIGATION (Sticky Header) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E8E0D4]/90 backdrop-blur-md border-b border-[#1C1C1C]/5 transition-all">
        <div className="max-w-7xl mx-auto w-full px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight text-[#1C1C1C]">Cakes by Nessa</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-[#4A5D3A] font-bold">
            <a href="#menu" className="hover:text-[#1C1C1C] transition-colors">Menu</a>
            <a href="#custom" className="hover:text-[#1C1C1C] transition-colors">Custom Order</a>
            <a href="#contact" className="hover:text-[#1C1C1C] transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-[5px] justify-center items-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-[2px] bg-[#1C1C1C] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <div className={`w-6 h-[2px] bg-[#1C1C1C] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[2px] bg-[#1C1C1C] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#E8E0D4] border-b border-[#1C1C1C]/10 flex flex-col px-8 py-6 gap-6 text-lg font-bold text-[#4A5D3A] shadow-lg">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1C]">Menu</a>
            <a href="#custom" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1C]">Custom Order</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1C]">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION (Warm Kitchen UI) */}
      <section className="w-full bg-[#E8E0D4] text-[#1C1C1C] min-h-[90vh] flex flex-col pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 flex-1 w-full">
          {/* 55% Image Left */}
          <div className="w-full md:w-[55%] relative h-[65vh] rounded-[12px] overflow-hidden shadow-2xl">
            <Image 
              src="/images/hero/kitchen-atmosphere.png" 
              alt="Kitchen Atmosphere" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover hover:scale-105 transition-transform duration-[2s]" 
            />
          </div>
          {/* 45% Text Right */}
          <div className="w-full md:w-[45%] flex flex-col items-start">
            <h1 className="text-5xl md:text-[80px] font-bold leading-[1.05] mb-6 text-[#1C1C1C] tracking-tight">Making every celebration sweeter</h1>
            <p className="text-lg md:text-xl text-[#1C1C1C]/80 mb-10 max-w-md leading-relaxed font-semibold">
              We bake fresh cakes and pastries every morning. You can pick up daily items or request a custom cake for your next event. Order your celebration cakes, bento cakes, cupcakes, cake parfaits, cake loaves, banana bread, pastries, small chops, snacks, food trays, and surprise packages.
            </p>
            <a 
              href={copy.whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#4A5D3A] text-[#E8E0D4] px-10 py-5 rounded-[8px] font-bold text-lg hover:bg-[#3A492D] transition-colors active:scale-95 shadow-md flex items-center gap-3"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MENU SECTION (CSS Depth Mechanics + Lookbook Typography) */}
      <main id="menu" className="w-full bg-[#FAF8F5] pt-32 pb-32 px-6 relative z-10 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <h2 className="font-lora text-5xl md:text-6xl text-[#000000] mb-4">Collection</h2>
            <p className="font-inter text-[#000000]/60 max-w-lg text-center leading-relaxed">Available daily or via 24-hour pre-order. Tap or hover any item to view details and request an order.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: '1200px' }}>
            
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group relative h-[420px] w-full cursor-pointer preserve-3d"
                onClick={() => setFlippedCardId(flippedCardId === product.id ? null : product.id)}
              >
                <div className={`flip-inner relative w-full h-full ${flippedCardId === product.id ? 'is-flipped' : ''}`}>
                  
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#000000]/5 overflow-hidden backface-hidden flex flex-col">
                    <div className="relative h-[60%] w-full bg-[#f5f5f5] overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <h3 className="font-lora text-xl mb-1 text-[#000000] leading-tight">{product.name}</h3>
                    </div>
                  </div>
                  
                  {/* Back Face (Flipped) */}
                  <div className="absolute inset-0 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#000000]/10 p-6 flex flex-col justify-between backface-hidden rotate-y-180">
                    <div>
                      <h3 className="font-lora text-2xl mb-3 text-[#000000] leading-tight">{product.name}</h3>
                      <p className="font-inter text-[13px] text-[#000000]/70 mb-6 leading-[1.6]">{product.description}</p>
                      <div className="border-t border-[#000000]/10 pt-4 flex justify-between items-center text-[11px] uppercase tracking-widest text-[#000000]/50 font-inter font-medium">
                        <span>{product.size}</span>
                        <span>Serves {product.serves}</span>
                      </div>
                    </div>
                    <a 
                      href={`https://wa.me/2349059340229?text=${encodeURIComponent(`I'm interested in this: ${product.description}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center border border-[#000000] text-[#000000] py-3 uppercase tracking-[0.15em] text-[11px] font-semibold hover:bg-[#000000] hover:text-white transition-colors bg-transparent font-inter block" 
                    >
                      Order Request
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>

      {/* CUSTOM ORDER SECTION (Lookbook Typography & Layout) */}
      <section id="custom" className="w-full bg-[#FFFFFF] pt-32 pb-32 border-t border-[#000000]/5 relative z-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-lora text-5xl mb-8 text-[#000000]">Commissions</h2>
            <p className="font-inter text-[15px] leading-[1.8] text-[#000000]/70 mb-8 max-w-sm">
              For events requiring specific flavor profiles and aesthetic direction, we accept custom requests. Please provide at least 24 hours notice for all bespoke builds.
            </p>
          </div>
          
          <div className="space-y-10 font-inter">
            <input type="text" placeholder="Event Date" className="lookbook-input w-full py-4 text-[15px] text-[#000000] placeholder:text-[#000000]/40" />
            <textarea placeholder="Vision & Details (Flavors, Size, Aesthetic)" rows={3} className="lookbook-input w-full py-4 text-[15px] text-[#000000] placeholder:text-[#000000]/40 resize-none"></textarea>
            
            <div className="pt-4">
              <a 
                href={copy.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[13px] uppercase tracking-[0.15em] font-semibold pb-2 border-b border-[#000000] hover:text-[#7A8FA6] hover:border-[#7A8FA6] transition-colors text-[#000000] bg-transparent"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer id="contact" className="w-full bg-[#FAFAFA] pt-24 pb-12 border-t border-[#000000]/5 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16 font-inter text-[14px]">
          
          {/* Location */}
          <div>
            <div className="font-medium mb-6 uppercase tracking-[0.2em] text-[12px] text-[#7A8FA6]">Location</div>
            <p className="text-[#000000] text-lg mb-2 font-medium">Airport Road</p>
            <p className="text-[#000000]/60 mb-6">Benin City, Edo State, Nigeria</p>
            <p className="text-[#000000]/80 mb-6">Mon - Sat, 9:00am - 6:00pm</p>
            
            <div className="flex flex-col items-start gap-4">
              <a href={copy.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#000000] border-b border-[#000000] pb-1 uppercase tracking-widest text-[12px] hover:text-[#7A8FA6] hover:border-[#7A8FA6] transition-all font-semibold inline-block">
                Message Us Directly
              </a>
              <a href="https://www.instagram.com/cakesbynessahh" target="_blank" rel="noopener noreferrer" className="text-[#000000] border-b border-[#000000] pb-1 uppercase tracking-widest text-[12px] hover:text-[#7A8FA6] hover:border-[#7A8FA6] transition-all font-semibold inline-block">
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* WebNests Watermark */}
          <div className="flex flex-col justify-end items-start md:items-end mt-8 md:mt-0">
            <div className="flex items-center gap-3 bg-[#FFFFFF] px-6 py-4 rounded-xl border border-[#000000]/5 shadow-sm">
              <span className="text-[#000000]/50 text-xs font-semibold uppercase tracking-wider">Created by</span>
              <a href="https://webnests.site" target="_blank" rel="noopener noreferrer" className="font-bold flex items-center gap-3 text-lg hover:text-[#7A8FA6] transition-colors">
                WebNests
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-300">
                  <Image src="/images/webnest-logo.png" alt="WebNests Logo" width={32} height={32} className="object-cover" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
