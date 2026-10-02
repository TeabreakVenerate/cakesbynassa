export interface Product {
  id: string;
  name: string;
  size: string;
  shortDim: string;
  servings: string;
  price: string;
  priceNum: number;
  category: "Celebration" | "Bento" | "Cupcakes" | "Chops" | "Platters";
  description: string;
  image: string;
  notes: string;
  badge?: string;
  stream: "preorder" | "sameday";
}

export interface DeliveryZone {
  name: string;
  fee: number;
  feeFormatted: string;
}

export const BRAND = {
  name: "Cakesbynessahh",
  tagline: "Making Every Celebration Sweeter",
  address: "Airport Road, Benin City, Edo State",
  phone: "+234 905 934 0229",
  whatsappLink: "https://wa.me/2349059340229",
  hours: "Mon-Sat, 8am-7pm",
} as const;

export const DELIVERY_ZONES: DeliveryZone[] = [
  { name: "Airport Road", fee: 800, feeFormatted: "\u20A6800" },
  { name: "GRA", fee: 1000, feeFormatted: "\u20A61,000" },
  { name: "Sapele Road", fee: 1200, feeFormatted: "\u20A61,200" },
  { name: "Ugbowo / UNIBEN", fee: 1800, feeFormatted: "\u20A61,800" },
  { name: "Ikpoba Hill", fee: 2200, feeFormatted: "\u20A62,200" },
];

export const PRODUCTS: Product[] = [
  {
    id: "c1",
    name: "Red Velvet Celebration Cake",
    size: "Size 8 (8 x 5 inches)",
    shortDim: "8 x 5 in",
    servings: "8-12 slices",
    price: "\u20A628,000",
    priceNum: 28000,
    category: "Celebration",
    description:
      "Buttermilk sponge layered with vanilla cream cheese frosting and shell borders.",
    image: "/images/products/red-velvet.png",
    notes: "Deep crimson sponge with Dutch cocoa undertone.",
    badge: "Most Popular",
    stream: "preorder",
  },
  {
    id: "c2",
    name: "Deluxe Vanilla Bean Cake",
    size: "Size 10 (10 x 5 inches)",
    shortDim: "10 x 5 in",
    servings: "16-20 slices",
    price: "\u20A642,000",
    priceNum: 42000,
    category: "Celebration",
    description:
      "Three-layer vanilla sponge with Swiss meringue buttercream and vanilla bean paste.",
    image: "/images/products/vanilla-bean.png",
    notes: "Real vanilla bean flecks visible in every slice.",
    stream: "preorder",
  },
  {
    id: "c3",
    name: "Chocolate Fudge Tower",
    size: "Size 12 (12 x 6 inches)",
    shortDim: "12 x 6 in",
    servings: "25-30 slices",
    price: "\u20A654,000",
    priceNum: 54000,
    category: "Celebration",
    description:
      "Four-layer chocolate sponge with dark ganache and chocolate shards.",
    image: "/images/products/chocolate-fudge.png",
    notes: "70% Belgian cocoa ganache, fudge-dense crumb.",
    badge: "Showstopper",
    stream: "preorder",
  },
  {
    id: "c4",
    name: "Korean Bento Lunchbox Cake",
    size: "4-inch round",
    shortDim: "4 in",
    servings: "1-2 slices",
    price: "\u20A612,500",
    priceNum: 12500,
    category: "Bento",
    description:
      "Personal-sized cake in a clear bento box. Custom message painted on top.",
    image: "/images/products/bento-lunchbox.png",
    notes: "Choose your sponge flavor and inscription at checkout.",
    stream: "preorder",
  },
  {
    id: "c5",
    name: "Butter Cream Cupcakes (Box of 6)",
    size: "Standard cupcake",
    shortDim: "Standard",
    servings: "6 cupcakes",
    price: "\u20A69,000",
    priceNum: 9000,
    category: "Cupcakes",
    description: "Six cupcakes with swirled buttercream in assorted flavors.",
    image: "/images/products/cupcakes-box.png",
    notes: "Vanilla, red velvet, and chocolate available.",
    stream: "sameday",
  },
  {
    id: "c6",
    name: "Signature Meat Pie (Pack of 4)",
    size: "Regular",
    shortDim: "Regular",
    servings: "4 pies",
    price: "\u20A67,500",
    priceNum: 7500,
    category: "Chops",
    description:
      "Flaky golden crust filled with seasoned minced beef and vegetables.",
    image: "/images/products/meat-pie.png",
    notes: "Freshly baked every morning. Best served warm.",
    stream: "sameday",
  },
  {
    id: "c7",
    name: "Strawberry Drizzle Cake",
    size: "Size 8 (8 x 5 inches)",
    shortDim: "8 x 5 in",
    servings: "8-12 slices",
    price: "\u20A632,000",
    priceNum: 32000,
    category: "Celebration",
    description:
      "Vanilla sponge with strawberry compote layers and white chocolate drizzle.",
    image: "/images/products/strawberry-drizzle.png",
    notes: "Fresh strawberry pieces folded into every layer.",
    stream: "preorder",
  },
  {
    id: "c8",
    name: "Party Platter (Mixed Pastries)",
    size: "Large tray",
    shortDim: "Large tray",
    servings: "15-20 people",
    price: "\u20A625,000",
    priceNum: 25000,
    category: "Platters",
    description:
      "Mixed tray of puff puff, spring rolls, samosa, sausage rolls, and mini pies.",
    image: "/images/products/party-platter.png",
    notes: "Perfect for office parties and family gatherings.",
    stream: "sameday",
  },
];

/** Build a WhatsApp order link with pre-filled message */
export function whatsappOrderLink(product: Product): string {
  const message = encodeURIComponent(
    `Hi, I'd like to order ${product.name} (${product.price})`
  );
  return `${BRAND.whatsappLink}?text=${message}`;
}

/** Build a general WhatsApp inquiry link */
export function whatsappInquiryLink(message: string): string {
  return `${BRAND.whatsappLink}?text=${encodeURIComponent(message)}`;
}
