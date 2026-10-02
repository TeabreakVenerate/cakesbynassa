
'use client';
import Image from 'next/image';
import { products } from '@/data/products';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { useEffect, useRef } from 'react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }, i * 50);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full pt-24 pb-16 overflow-hidden" ref={containerRef}>
      <div className="px-12 mb-16 reveal-item opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
        <h2 className="font-lora text-5xl">Collection</h2>
      </div>
      <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-12 pr-[30vw] flex gap-12 pb-12">
        {products.map(product => (
          <div key={product.id} className="snap-start shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] flex flex-col reveal-item opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div className="relative w-full aspect-[4/5] mb-6 bg-[#f5f5f5]">
              <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 85vw, 40vw" className="object-cover" />
            </div>
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-lora text-3xl">{product.name}</h3>
              <span className="font-medium text-[#7A8FA6]">₦{product.price.toLocaleString()}</span>
            </div>
            <p className="text-[14px] text-[#000000]/60 mb-6 leading-[1.6]">{product.description}</p>
            <div className="border-t border-[#000000]/10 pt-4 flex justify-between items-center text-[13px] uppercase tracking-wider">
              <span className="text-[#000000]/50">{product.size}</span>
              <WhatsAppButton productName={product.name} price={product.price} className="text-[#000000] font-medium hover:text-[#7A8FA6] transition-colors">Order Request</WhatsAppButton>
            </div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
