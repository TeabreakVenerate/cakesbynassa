import type { Metadata } from 'next';
import { 
  Nunito, 
  Playfair_Display, 
  Outfit, 
  Inter, 
  Lora, 
  JetBrains_Mono 
} from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: 'Cakesbynessahh | Prototype',
  description: 'Making Every Celebration Sweeter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
      ${nunito.variable} 
      ${playfair.variable} 
      ${outfit.variable} 
      ${inter.variable} 
      ${lora.variable} 
      ${jetbrains.variable}
    `}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
