import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function DispatchBoard() {
  const [activeTab, setActiveTab] = useState<'Full Menu' | 'Order Now'>('Full Menu');
  const [selectedZone, setSelectedZone] = useState(deliveryZones[0].name);
  const activeFee = deliveryZones.find(z => z.name === selectedZone)?.fee || 0;

  const preOrders = products.filter(p => p.stream === 'Pre-order');
  const readyToday = products.filter(p => p.stream === 'Same-day');

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1E293B] font-inter pb-24 selection:bg-[#F59E0B]/20">
      {/* Top Nav Tabs */}
      <nav className="w-full bg-white border-b border-[#1E293B]/10 px-6 py-3 flex justify-between items-center sticky top-0 z-40">
        <div className="font-bold tracking-tight">{copy.brand}</div>
        <div className="flex bg-[#F9F7F4] p-1 rounded-lg border border-[#1E293B]/5">
          <button 
            onClick={() => setActiveTab('Full Menu')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
              activeTab === 'Full Menu' ? 'bg-white shadow-sm text-[#1E293B]' : 'text-[#1E293B]/60'
            }`}
          >
            Full Menu
          </button>
          <button 
            onClick={() => setActiveTab('Order Now')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
              activeTab === 'Order Now' ? 'bg-white shadow-sm text-[#1E293B]' : 'text-[#1E293B]/60'
            }`}
          >
            Delivery Info
          </button>
        </div>
      </nav>

      {activeTab === 'Full Menu' ? (
        <>
          {/* Compact Hero */}
          <section className="px-6 py-12 h-[30vh] min-h-[250px] flex flex-col justify-center items-center text-center border-b border-[#1E293B]/10 bg-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">What are you looking for today?</h1>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a href="#preorder" className="flex-1 bg-[#F9F7F4] border-2 border-[#F59E0B]/30 text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white py-3 rounded-xl font-semibold transition-colors active:scale-95">
                Celebration Cakes
              </a>
              <a href="#ready" className="flex-1 bg-[#F9F7F4] border-2 border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E] hover:text-white py-3 rounded-xl font-semibold transition-colors active:scale-95">
                Quick Bites
              </a>
            </div>
          </section>

          {/* Split Screen Menu */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full h-full">
            
            {/* Left Column: Pre-Order */}
            <div id="preorder" className="w-full md:w-1/2 md:border-r border-[#1E293B]/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#F59E0B]/30">
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <h2 className="text-2xl font-bold text-[#F59E0B]">Pre-Order (24h)</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {preOrders.map((product) => (
                  <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-[#1E293B]/5 flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[#F9F7F4]">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-base truncate pr-2">{product.name}</h3>
                          <span className="font-jetbrains text-[#1E293B] shrink-0 font-medium text-sm">₦{product.price.toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-[#1E293B]/60 mb-2 font-jetbrains">{product.size} | Serves {product.serves}</div>
                      </div>
                      <WhatsAppButton 
                        productName={product.name} 
                        price={product.price}
                        className="self-start text-xs font-semibold bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1.5 rounded hover:bg-[#F59E0B] hover:text-white transition-colors"
                      >
                        Request Order
                      </WhatsAppButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Ready Today */}
            <div id="ready" className="w-full md:w-1/2 p-6 md:p-8 bg-white/50">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#22C55E]/30">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse"></div>
                <h2 className="text-2xl font-bold text-[#22C55E]">Ready Today</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {readyToday.map((product) => (
                  <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-[#1E293B]/5 flex flex-col sm:flex-row gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-[#22C55E]"></div>
                    <div className="relative w-full sm:w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[#F9F7F4]">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-base truncate pr-2">{product.name}</h3>
                          <span className="font-jetbrains text-[#1E293B] shrink-0 font-medium text-sm">₦{product.price.toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-[#1E293B]/60 mb-2 font-jetbrains">{product.size}</div>
                      </div>
                      <WhatsAppButton 
                        productName={product.name} 
                        price={product.price}
                        className="self-start text-xs font-semibold bg-[#22C55E] text-white px-3 py-1.5 rounded hover:bg-[#16a34a] transition-colors shadow-sm shadow-[#22C55E]/20"
                      >
                        Dispatch Now
                      </WhatsAppButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </>
      ) : (
        <div className="max-w-2xl mx-auto p-6 md:p-12 mt-8 bg-white rounded-2xl shadow-sm border border-[#1E293B]/5">
          <h2 className="text-2xl font-bold mb-6">Delivery Operations</h2>
          
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">Calculate Dispatch Fee</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="flex-1 bg-[#F9F7F4] border border-[#1E293B]/10 rounded-lg p-3 focus:outline-none focus:border-[#1E293B]/30 font-jetbrains text-sm"
              >
                {deliveryZones.map(zone => (
                  <option key={zone.name} value={zone.name}>{zone.name}</option>
                ))}
              </select>
              <div className="bg-[#1E293B] text-white px-6 py-3 rounded-lg font-jetbrains font-bold text-center">
                ₦{activeFee.toLocaleString()}
              </div>
            </div>
          </div>
          
          <div className="space-y-4 font-jetbrains text-sm text-[#1E293B]/80 bg-[#F9F7F4] p-6 rounded-xl">
            <div className="flex justify-between border-b border-[#1E293B]/10 pb-2">
              <span className="font-semibold text-[#1E293B]">Payment Method</span>
              <span>{copy.payment}</span>
            </div>
            <div className="flex justify-between border-b border-[#1E293B]/10 pb-2">
              <span className="font-semibold text-[#1E293B]">HQ Location</span>
              <span>{copy.location}</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="font-semibold text-[#1E293B]">Dispatch Line</span>
              <span>{copy.whatsapp}</span>
            </div>
          </div>
          
          <a 
            href={copy.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-8 bg-[#1E293B] text-white py-4 rounded-xl font-bold hover:bg-black transition-colors active:scale-95"
          >
            Contact Dispatch
          </a>
        </div>
      )}
    </div>
  );
}
