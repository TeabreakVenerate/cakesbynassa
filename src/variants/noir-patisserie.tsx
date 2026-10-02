import Image from 'next/image';
import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function NoirPatisserie() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F5F2EE] font-inter text-[13px] selection:bg-[#C4787A] selection:text-[#0E0E0E]">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled ? 'bg-[#0E0E0E]/70 backdrop-blur-[12px] border-b border-[#F5F2EE]/10' : 'bg-transparent'
        }`}
      >
        <div className="text-xl font-playfair tracking-wider uppercase">{copy.brand}</div>
        <div className="flex gap-8 uppercase tracking-widest text-[11px]">
          <a href="#menu" className="hover:text-[#C4787A] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">Collection</a>
          <a href="#custom" className="hover:text-[#C4787A] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">Special Order</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden pt-20">
        <div className="relative w-[60vh] h-[60vh] max-w-full max-h-full mb-12 animate-in fade-in zoom-in-95 duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <Image 
            src="/images/hero/hero-texture.png"
            alt="Signature Cake"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 ease-[cubic-bezier(0.23,1,0.32,1)] fill-mode-both">
          <h1 className="text-5xl md:text-7xl font-playfair mb-4">{copy.tagline}</h1>
          <a 
            href="#menu"
            className="inline-block mt-8 uppercase tracking-widest text-[11px] border border-[#F5F2EE] px-8 py-3 hover:bg-[#F5F2EE] hover:text-[#0E0E0E] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
          >
            Explore the Collection
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="w-full">
        {products.map((product, i) => (
          <div key={product.id} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full min-h-[70vh]`}>
            <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)]" 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-12 py-24 md:p-24 bg-[#0E0E0E]">
              <div className="max-w-md">
                <div className="uppercase tracking-widest text-[11px] text-[#F5F2EE]/50 mb-4">{product.category}</div>
                <h3 className="text-4xl font-playfair mb-6">{product.name}</h3>
                <p className="text-[#F5F2EE]/70 mb-8 text-[13px] leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-8 mb-12">
                  <span className="text-lg font-playfair text-[#C4787A]">₦{product.price.toLocaleString()}</span>
                  <span className="text-[#F5F2EE]/50">{product.size} / Serves {product.serves}</span>
                </div>
                <WhatsAppButton 
                  productName={product.name} 
                  price={product.price}
                  className="inline-block bg-[#C4787A] text-[#0E0E0E] uppercase tracking-widest text-[11px] px-8 py-4 hover:bg-[#a86567] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
                >
                  Order
                </WhatsAppButton>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Custom Inquiry */}
      <section id="custom" className="max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="text-5xl font-playfair mb-8">Special Commissions</h2>
        <p className="text-[#F5F2EE]/70 mb-12 max-w-xl mx-auto leading-relaxed">
          We accept custom requests for events requiring specific flavor profiles and aesthetic direction. Provide your details below.
        </p>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Event Date" 
            className="bg-transparent border-b border-[#F5F2EE]/30 py-4 px-0 text-[#F5F2EE] placeholder:text-[#F5F2EE]/30 focus:outline-none focus:border-[#C4787A] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" 
          />
          <textarea 
            placeholder="Vision & Requirements" 
            rows={1} 
            className="bg-transparent border-b border-[#F5F2EE]/30 py-4 px-0 text-[#F5F2EE] placeholder:text-[#F5F2EE]/30 focus:outline-none focus:border-[#C4787A] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] resize-none"
          ></textarea>
          <a 
            href={copy.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 border border-[#C4787A] text-[#C4787A] uppercase tracking-widest text-[11px] px-8 py-4 hover:bg-[#C4787A] hover:text-[#0E0E0E] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
          >
            Submit Inquiry
          </a>
        </div>
      </section>

      {/* Delivery & Footer */}
      <footer className="border-t border-[#F5F2EE]/10 pt-24 pb-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="font-playfair text-2xl mb-8">Delivery Logistics</h4>
            <div className="flex flex-col gap-4 max-w-sm">
              {deliveryZones.map(zone => (
                <div key={zone.name} className="flex justify-between border-b border-[#F5F2EE]/10 pb-2">
                  <span className="text-[#F5F2EE]/70">{zone.name}</span>
                  <span>₦{zone.fee.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[#C4787A]">{copy.payment}</p>
          </div>
          <div className="md:text-right flex flex-col md:items-end justify-between">
            <div>
              <h4 className="font-playfair text-2xl mb-4">Contact</h4>
              <p className="text-[#F5F2EE]/70 mb-2">{copy.location}</p>
              <p className="text-[#F5F2EE]/70">{copy.whatsapp}</p>
            </div>
            <div className="mt-12 text-[#F5F2EE]/30 text-[11px] uppercase tracking-widest">
              {copy.brand} © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
