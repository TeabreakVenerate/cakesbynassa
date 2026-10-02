export const copy = {
  brand: 'Cakesbynessahh',
  tagline: 'Making Every Celebration Sweeter',
  whatsapp: '+234 905 934 0229',
  whatsappLink: 'https://wa.me/2349059340229',
  location: 'Airport Road, Benin City, Edo State',
  payment: 'Pay on delivery at the gate.',
  orderingInfo: 'WhatsApp-only. Celebration cakes need 24h advance notice. Daily bakes available same-day. Photo verification before dispatch.',
  generateOrderLink: (productName: string, price: number) => {
    return `https://wa.me/2349059340229?text=${encodeURIComponent(`Hi, I'd like to order ${productName} (₦${price})`)}`;
  }
};
