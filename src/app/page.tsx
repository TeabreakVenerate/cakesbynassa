'use client';

import { useState } from 'react';
import { Picker } from '@/components/picker';
import { WarmKitchen } from '@/variants/warm-kitchen';
import { NoirPatisserie } from '@/variants/noir-patisserie';
import { ThreeDShowroom } from '@/variants/three-d-showroom';
import { CSSDepth } from '@/variants/css-depth';
import { BeninDirect } from '@/variants/benin-direct';
import { Lookbook } from '@/variants/lookbook';
import { BentoGrid } from '@/variants/bento-grid';
import { DispatchBoard } from '@/variants/dispatch-board';

const VARIANTS = [
  WarmKitchen,
  NoirPatisserie,
  ThreeDShowroom,
  CSSDepth,
  BeninDirect,
  Lookbook,
  BentoGrid,
  DispatchBoard,
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = VARIANTS[activeIndex];

  return (
    <main className="min-h-screen relative w-full overflow-x-hidden">
      <ActiveComponent />
      <Picker activeVariantIndex={activeIndex} onVariantChange={setActiveIndex} />
    </main>
  );
}
