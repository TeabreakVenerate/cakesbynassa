import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-12');
            }, i * 50); // Stagger
            observer.unobserve(entry.target); // Only first appearance
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-inter pb-32">
      {/* Editorial Navigation */}
      <nav className="w-full py-8 border-b border-[#000000]/10 flex justify-center gap-12 text-[13px] tracking-[0.2em] uppercase font-medium">
        <a href="#collection" className="hover:text-[#7A8FA6] transition-colors">Collection</a>
        <a href="#bespoke" className="hover:text-[#7A8FA6] transition-colors">Commissions</a>
        <a href="#visit" className="hover:text-[#7A8FA6] transition-colors">Visit</a>
      </nav>

      {/* Split Hero */}
      <section className="w-full flex flex-col md:flex-row min-h-[85vh]">
        <div className="w-full md:w-[60%] h-[50vh] md:h-auto relative bg-[#f5f5f5]">
          <Image 
            src="/images/hero/hero-texture.png" 
            alt="Editorial cover"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col justify-center px-12 py-24 md:py-[120px]">
          <h1 className="font-lora text-6xl md:text-[72px] leading-[1.1] mb-8">{copy.brand}</h1>
          <p className="text-[14px] leading-[1.8] text-[#000000]/80 mb-12 max-w-sm">
            {copy.tagline}. We bake fresh daily on Airport Road, Benin City. Pre-order celebration cakes 24 hours in advance.
          </p>
          <a 
            href="#collection"
            className="inline-block border border-[#000000] px-8 py-4 uppercase tracking-[0.15em] text-[12px] font-medium text-center hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors w-fit"
          >
            View the collection
          </a>
        </div>
      </section>

      {/* Horizontal Scroll Menu */}
      <section id="collection" className="w-full pt-32 pb-16 overflow-hidden" ref={containerRef}>
        <div className="px-12 mb-16 reveal-item opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
          <h2 className="font-lora text-5xl">Collection</h2>
        </div>
        
        <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-12 pr-[30vw] flex gap-12 pb-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="snap-start shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] flex flex-col reveal-item opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <div className="relative w-full aspect-[4/5] mb-6 bg-[#f5f5f5]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-lora text-3xl">{product.name}</h3>
                <span className="font-medium text-[#7A8FA6]">₦{product.price.toLocaleString()}</span>
              </div>
              <p className="text-[14px] text-[#000000]/60 mb-6 leading-[1.6]">
                {product.description}
              </p>
              <div className="border-t border-[#000000]/10 pt-4 flex justify-between items-center text-[13px] uppercase tracking-wider">
                <span className="text-[#000000]/50">{product.size}</span>
                <WhatsAppButton 
                  productName={product.name} 
                  price={product.price}
                  className="text-[#000000] font-medium hover:text-[#7A8FA6] transition-colors"
                >
                  Order Request
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commissions & Info */}
      <section className="max-w-7xl mx-auto px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div id="bespoke" className="reveal-item opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
          <h2 className="font-lora text-4xl mb-8">Commissions</h2>
          <p className="text-[14px] leading-[1.8] text-[#000000]/80 mb-8 max-w-md">
            For events requiring specific flavor profiles and aesthetic direction, we accept custom requests. Please provide at least 24 hours notice.
          </p>
          <div className="space-y-6 max-w-md">
            <input type="text" placeholder="Event Date" className="w-full border-b border-[#000000]/20 py-3 bg-transparent focus:outline-none focus:border-[#7A8FA6] text-[14px]" />
            <textarea placeholder="Vision & Details" rows={2} className="w-full border-b border-[#000000]/20 py-3 bg-transparent focus:outline-none focus:border-[#7A8FA6] text-[14px] resize-none"></textarea>
            <a 
              href={copy.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[13px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#000000] hover:text-[#7A8FA6] hover:border-[#7A8FA6] transition-colors"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
        
        <div id="visit" className="reveal-item opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
          <h2 className="font-lora text-4xl mb-8">Visit</h2>
          <div className="grid grid-cols-2 gap-12 text-[14px] leading-[1.8]">
            <div>
              <div className="font-medium mb-4 uppercase tracking-wider text-[12px]">Location</div>
              <p className="text-[#000000]/80">{copy.location}</p>
              <p className="mt-4 text-[#000000]/80">Mon - Sat<br/>9:00 - 18:00</p>
            </div>
            <div>
              <div className="font-medium mb-4 uppercase tracking-wider text-[12px]">Delivery</div>
              <div className="space-y-2 text-[#000000]/80">
                {deliveryZones.map(zone => (
                  <div key={zone.name} className="flex justify-between">
                    <span>{zone.name}</span>
                    <span>₦{zone.fee.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#7A8FA6] font-medium">{copy.payment}</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
