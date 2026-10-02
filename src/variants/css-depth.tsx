import Image from 'next/image';
import { useState, useRef, PointerEvent } from 'react';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { deliveryZones } from '@/data/delivery-zones';

export function CSSDepth() {
  const [sheetY, setSheetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  
  const startY = useRef(0);
  const currentY = useRef(0);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!sheetRef.current) return;
    setIsDragging(true);
    sheetRef.current.setPointerCapture(e.pointerId);
    startY.current = e.clientY;
    currentY.current = sheetY;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientY - startY.current;
    
    // Rubber banding if trying to pull up when already open
    let newY = currentY.current + delta;
    if (newY < -400) {
      newY = -400 - (Math.abs(newY + 400) * 0.2);
    }
    
    setSheetY(newY > 0 ? newY : newY);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !sheetRef.current) return;
    setIsDragging(false);
    sheetRef.current.releasePointerCapture(e.pointerId);
    
    if (sheetY > -200) {
      setSheetY(0); // Snap close
      setIsOpen(false);
    } else {
      setSheetY(-400); // Snap open
      setIsOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A3A3C] font-sans selection:bg-[#D68E5E] selection:text-white pb-32">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/80 backdrop-blur-xl border-b border-[#3A3A3C]/10 px-6 py-4 flex justify-between items-center transition-all">
        <div className="font-semibold text-lg tracking-tight">{copy.brand}</div>
        <button 
          onClick={() => { setIsOpen(true); setSheetY(-400); }}
          className="text-[#D68E5E] font-medium active:opacity-50"
        >
          Custom Order
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full overflow-hidden perspective-[1200px] h-[60vh] relative flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="/images/hero/kitchen-atmosphere.png" alt="Background" fill className="object-cover blur-sm" />
        </div>
        <div 
          className="relative z-10 p-12 text-center"
          style={{ transform: 'translateZ(100px)' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{copy.tagline}</h1>
          <p className="text-xl md:text-2xl font-medium text-[#3A3A3C]/80">Fresh daily on Airport Road</p>
        </div>
      </section>

      {/* Menu Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative h-96 [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:[transform:rotateY(180deg)]"
            >
              {/* Front */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-[#3A3A3C]/5 overflow-hidden [backface-visibility:hidden]">
                <div className="relative h-3/5 w-full bg-[#FAF8F5]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-[#D68E5E] mb-1">{product.category}</div>
                  <h3 className="text-xl font-bold tracking-tight mb-2 truncate">{product.name}</h3>
                  <div className="font-medium text-[#3A3A3C]/60">₦{product.price.toLocaleString()}</div>
                </div>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-[#3A3A3C]/5 p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{product.name}</h3>
                  <p className="text-[#3A3A3C]/80 font-medium leading-relaxed mb-6">{product.description}</p>
                  <div className="text-sm text-[#3A3A3C]/60 mb-2">Size: {product.size}</div>
                  <div className="text-sm text-[#3A3A3C]/60">Serves: {product.serves}</div>
                </div>
                <WhatsAppButton 
                  productName={product.name} 
                  price={product.price}
                  className="w-full py-4 bg-[#D68E5E] text-white rounded-2xl font-semibold text-center hover:bg-[#c27c4d] active:scale-95 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-[#3A3A3C]/10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4">Delivery</h2>
            <div className="space-y-3">
              {deliveryZones.map(zone => (
                <div key={zone.name} className="flex justify-between text-[#3A3A3C]/80">
                  <span>{zone.name}</span>
                  <span className="font-medium text-[#3A3A3C]">₦{zone.fee.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm font-semibold text-[#D68E5E]">{copy.payment}</div>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4">Location</h2>
            <p className="text-[#3A3A3C]/80 mb-2">{copy.location}</p>
            <p className="font-medium">{copy.whatsapp}</p>
          </div>
        </div>
      </section>

      {/* Bottom Sheet Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => { setSheetY(0); setIsOpen(false); }}
        />
      )}

      {/* Draggable Bottom Sheet */}
      <div 
        ref={sheetRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white z-50 rounded-t-[40px] shadow-2xl p-8 touch-none flex flex-col items-center"
        style={{ 
          transform: `translateY(${Math.max(-400, sheetY) + 800}px)`, 
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' 
        }}
      >
        {/* Drag Handle */}
        <div className="w-16 h-1.5 bg-[#3A3A3C]/20 rounded-full mb-8 cursor-grab active:cursor-grabbing" />
        
        <div className="w-full max-w-md mx-auto text-left">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Custom Inquiry</h2>
          <p className="text-[#3A3A3C]/60 mb-8">Pull down to close. Tell us what you need and we will confirm over WhatsApp.</p>
          
          <input type="text" placeholder="Date of Event" className="w-full bg-[#FAF8F5] px-4 py-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#D68E5E] transition-all" />
          <textarea placeholder="Flavor, size, and design notes" rows={4} className="w-full bg-[#FAF8F5] px-4 py-4 rounded-xl mb-8 focus:outline-none focus:ring-2 focus:ring-[#D68E5E] transition-all"></textarea>
          
          <a 
            href={copy.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[#D68E5E] text-white rounded-2xl font-semibold text-center hover:bg-[#c27c4d] active:scale-95 transition-all"
          >
            Message Bakery
          </a>
        </div>
      </div>
    </div>
  );
}
