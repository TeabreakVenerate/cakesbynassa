'use client';

import { useState } from 'react';
import { Picker } from '@/components/picker';
import { WarmKitchen } from '@/variants/warm-kitchen';
import { CSSDepth } from '@/variants/css-depth';
import { Lookbook } from '@/variants/lookbook';

const VARIANTS = [
  WarmKitchen,
  CSSDepth,
  Lookbook,
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
