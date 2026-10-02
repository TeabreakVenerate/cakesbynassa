import Image from 'next/image';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

const SquigglyDivider = () => (
  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-8 text-[#B8956A] opacity-30" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5" />
  </svg>
);

export function WarmKitchen() {
  return (
    <div className="min-h-screen bg-[#E8E0D4] text-[#1C1C1C] font-nunito pb-24 selection:bg-[#4A5D3A] selection:text-[#E8E0D4]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tight">{copy.brand}</div>
        <div className="flex gap-8 text-[#4A5D3A] font-semibold">
          <a href="#menu" className="hover:text-[#1C1C1C] transition-colors">Menu</a>
          <a href="#custom" className="hover:text-[#1C1C1C] transition-colors">Custom Order</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-16 min-h-[70vh]">
        <div className="w-full md:w-[55%] relative h-[60vh] rounded-[12px] overflow-hidden">
          <Image 
            src="/images/hero/kitchen-atmosphere.png"
            alt="Bakery atmosphere"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-[#1C1C1C]">
            {copy.tagline}
          </h1>
          <p className="text-lg text-[#1C1C1C]/80 mb-8 max-w-md leading-relaxed">
            We bake fresh cakes and pastries every morning. You can pick up daily items or request a custom cake for your next event.
          </p>
          <a 
            href={copy.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A5D3A] text-[#E8E0D4] px-8 py-4 rounded-[8px] font-bold text-lg hover:bg-[#3A492D] transition-colors active:scale-95"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>

      <div className="max-w-3xl mx-auto my-16"><SquigglyDivider /></div>

      {/* Menu Section */}
      <section id="menu" className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold mb-16 text-[#4A5D3A]">Menu</h2>
        <div className="flex flex-col gap-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row gap-8 items-center bg-[#1C1C1C]/5 p-6 rounded-[12px]">
              <div className="relative w-full sm:w-48 h-48 shrink-0 rounded-[8px] overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-xl font-bold text-[#4A5D3A]">₦{product.price.toLocaleString()}</span>
                </div>
                <div className="text-sm font-semibold text-[#B8956A] mb-3">
                  {product.category} • {product.size} • Serves {product.serves}
                </div>
                <p className="text-[#1C1C1C]/70 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <WhatsAppButton 
                  productName={product.name} 
                  price={product.price}
                  className="inline-block border-2 border-[#1C1C1C] text-[#1C1C1C] px-6 py-2 rounded-[8px] font-bold hover:bg-[#1C1C1C] hover:text-[#E8E0D4] transition-colors active:scale-95"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto my-16"><SquigglyDivider /></div>

      {/* Custom Inquiry */}
      <section id="custom" className="max-w-3xl mx-auto px-8 py-16 bg-[#1C1C1C] text-[#E8E0D4] rounded-[12px]">
        <h2 className="text-3xl font-bold mb-6 text-[#B8956A]">Request a custom cake</h2>
        <p className="mb-8 text-[#E8E0D4]/80">
          Need a specific flavor or design? Send us your requirements and we will confirm the details.
        </p>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Date needed" className="bg-transparent border border-[#E8E0D4]/20 rounded-[8px] px-4 py-3 text-[#E8E0D4] focus:outline-none focus:border-[#B8956A] transition-colors" />
          <textarea placeholder="Flavor and design ideas" rows={4} className="bg-transparent border border-[#E8E0D4]/20 rounded-[8px] px-4 py-3 text-[#E8E0D4] focus:outline-none focus:border-[#B8956A] transition-colors"></textarea>
          <a 
            href={copy.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B8956A] text-[#1C1C1C] px-8 py-4 rounded-[8px] font-bold text-center mt-4 hover:bg-[#a38055] transition-colors active:scale-95"
          >
            Send request
          </a>
        </div>
      </section>

      <div className="max-w-3xl mx-auto my-16"><SquigglyDivider /></div>

      {/* Contact & Delivery */}
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
          <div className="mt-6 p-4 bg-[#B8956A]/20 rounded-[8px] font-semibold text-[#1C1C1C]">
            {copy.payment}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-[#4A5D3A]">Visit Us</h2>
          <p className="mb-2">{copy.location}</p>
          <p className="mb-8">Open Monday to Saturday, 9am - 6pm</p>
          <p className="font-bold text-xl">{copy.whatsapp}</p>
        </div>
      </section>
    </div>
  );
}
