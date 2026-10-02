import Image from 'next/image';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { products } from '@/data/products';
import { copy } from '@/data/copy';
import { deliveryZones } from '@/data/delivery-zones';
import { WhatsAppButton } from '@/components/whatsapp-button';

function Cake3D() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Base tier */}
      <mesh position={[0, -1, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[2, 2.1, 1.2, 64]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.8} />
      </mesh>
      {/* Middle tier */}
      <mesh position={[0, 0.2, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.5, 1.6, 1.2, 64]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.8} />
      </mesh>
      {/* Top tier */}
      <mesh position={[0, 1.4, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1, 1.1, 1.2, 64]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.8} />
      </mesh>
      {/* Gold Accent */}
      <mesh position={[0, 2.2, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#D4A843" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  );
}

export function ThreeDShowroom() {
  return (
    <div className="min-h-screen bg-[#F0EDE8] text-[#2C2C2C] font-outfit pb-32">
      {/* Hero Section */}
      <section className="w-full h-[80vh] relative bg-gradient-to-b from-[#F0EDE8] to-[#E5E1D9] touch-manipulation cursor-grab active:cursor-grabbing">
        <div className="absolute inset-0 z-0">
          <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
            <Cake3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} maxPolarAngle={Math.PI / 2} />
            <Environment preset="city" />
          </Canvas>
        </div>
        <div className="absolute top-1/4 left-0 w-full pointer-events-none flex justify-center z-10 px-4">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-[#2C2C2C] drop-shadow-sm">{copy.brand}</h1>
            <p className="text-xl md:text-2xl font-medium text-[#2C2C2C]/80">{copy.tagline}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Menu Section */}
        <section id="menu" className="mb-32">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-[#D4A843]"></span>
            Menu Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-2xl shadow-sm border border-[#2C2C2C]/5 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="relative w-full sm:w-40 h-40 shrink-0 rounded-xl overflow-hidden bg-[#F0EDE8]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold leading-tight pr-4">{product.name}</h3>
                      <span className="font-bold text-[#D4A843] whitespace-nowrap">₦{product.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm font-medium text-[#2C2C2C]/50 mb-3">{product.category} • {product.size}</p>
                    <p className="text-[#2C2C2C]/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                  </div>
                  <WhatsAppButton 
                    productName={product.name} 
                    price={product.price}
                    className="self-start px-6 py-2 bg-[#2C2C2C] text-white rounded-lg font-bold text-sm hover:bg-[#1a1a1a] transition-colors active:scale-95"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Inquiry */}
        <section id="custom" className="mb-32 bg-white rounded-3xl p-12 shadow-sm border border-[#2C2C2C]/5 text-center">
          <h2 className="text-3xl font-bold mb-4">Custom Orders</h2>
          <p className="text-[#2C2C2C]/70 mb-8 max-w-2xl mx-auto">
            Have a specific vision? We accept custom orders for all celebration types. Please provide at least 24 hours notice.
          </p>
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Type of Event" className="w-full bg-[#F0EDE8] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4A843] focus:outline-none transition-all text-base" />
            <input type="text" placeholder="Expected Guests" className="w-full bg-[#F0EDE8] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4A843] focus:outline-none transition-all text-base" />
            <a 
              href={copy.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#D4A843] text-white py-4 rounded-xl font-bold hover:bg-[#c49833] transition-colors active:scale-95 shadow-lg shadow-[#D4A843]/20"
            >
              Start Consultation
            </a>
          </div>
        </section>

        {/* Contact & Delivery */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Delivery Zones</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2C2C2C]/5">
              {deliveryZones.map((zone, i) => (
                <div key={zone.name} className={`flex justify-between py-3 ${i !== deliveryZones.length - 1 ? 'border-b border-[#2C2C2C]/5' : ''}`}>
                  <span className="font-medium">{zone.name}</span>
                  <span className="font-bold text-[#D4A843]">₦{zone.fee.toLocaleString()}</span>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-[#2C2C2C]/10 text-sm font-bold text-[#2C2C2C]/70">
                {copy.payment}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Bakery Info</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2C2C2C]/5 h-[calc(100%-3rem)] flex flex-col justify-center">
              <p className="font-medium text-lg mb-2">{copy.location}</p>
              <p className="text-[#2C2C2C]/70 mb-6">Available Monday - Saturday<br/>9:00 AM - 6:00 PM</p>
              <div className="text-2xl font-black text-[#D4A843]">{copy.whatsapp}</div>
            </div>
          </div>
        </section>
      </main>

      {/* Navigation Pill Bar */}
      <nav className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-xl border border-[#2C2C2C]/10 flex gap-8 font-bold text-sm">
        <a href="#menu" className="hover:text-[#D4A843] transition-colors">Menu</a>
        <a href="#custom" className="hover:text-[#D4A843] transition-colors">Custom</a>
        <a href="#contact" className="hover:text-[#D4A843] transition-colors">Contact</a>
      </nav>
    </div>
  );
}
