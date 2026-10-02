import { copy } from '@/data/copy';

interface WhatsAppButtonProps {
  productName: string;
  price: number;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({ productName, price, className = '', children }: WhatsAppButtonProps) {
  return (
    <a
      href={copy.generateOrderLink(productName, price)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children || 'Order on WhatsApp'}
    </a>
  );
}
