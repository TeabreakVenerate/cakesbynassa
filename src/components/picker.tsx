'use client';
import { useEffect } from 'react';

const VARIANTS = [
  'Warm Kitchen', 'Noir', '3D Showroom', 'CSS Depth', 
  'Benin Direct', 'Lookbook', 'Bento Grid', 'Dispatch Board'
];

interface PickerProps {
  activeVariantIndex: number;
  onVariantChange: (index: number) => void;
}

export function Picker({ activeVariantIndex, onVariantChange }: PickerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      const num = parseInt(e.key);
      if (!isNaN(num) && num >= 1 && num <= 8) {
        onVariantChange(num - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onVariantChange]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] print:hidden">
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex gap-1 shadow-2xl items-center">
        {VARIANTS.map((variant, i) => (
          <button
            key={variant}
            onClick={() => onVariantChange(i)}
            className={`px-3 py-1.5 text-xs rounded-full transition-colors whitespace-nowrap ${
              activeVariantIndex === i
                ? 'bg-white text-black font-medium'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={`Press ${i + 1} to switch`}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
}
