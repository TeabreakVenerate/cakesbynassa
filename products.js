// Products dataset for Cakesbynessahh
// Pure ES6+ data structure representing the exact bakery menu catalog

const BAKERY_PRODUCTS = [
  // 1. Celebration Cakes (isCustomizable: true)
  {
    id: "prod-cel-1",
    name: "Velvet Elegance Celebration Cake",
    category: "Celebration Cakes",
    basePrice: 28000,
    formattedPrice: "₦28,000",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    isCustomizable: true,
    description: "Multilayered celebration masterpiece with premium buttercream icing, edible pearl accents, and custom inscription."
  },
  {
    id: "prod-cel-2",
    name: "Royal Crown Chocolate Drip Cake",
    category: "Celebration Cakes",
    basePrice: 32000,
    formattedPrice: "₦32,000",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    isCustomizable: true,
    description: "Decadent celebration cake layered with rich chocolate fudge, handcrafted chocolate truffles, and golden drip."
  },

  // 2. Bento Cakes (isCustomizable: true)
  {
    id: "prod-bento-1",
    name: "Pastel Dream Bento Cake",
    category: "Bento Cakes",
    basePrice: 9500,
    formattedPrice: "₦9,500",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80",
    isCustomizable: true,
    description: "Adorable 4-inch Korean lunchbox cake with minimalist Korean piping, custom inscription, and eco-friendly clamshell box."
  },
  {
    id: "prod-bento-2",
    name: "Heart-Shaped Vintage Bento Cake",
    category: "Bento Cakes",
    basePrice: 10500,
    formattedPrice: "₦10,500",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    isCustomizable: true,
    description: "Romantic vintage piped heart cake with frilled borders and your custom message written in fine lettering."
  },

  // 3. One-Layered Cakes (isCustomizable: true)
  {
    id: "prod-onelayer-1",
    name: "Classic Single-Layer Tea Cake",
    category: "One-Layered Cakes",
    basePrice: 14000,
    formattedPrice: "₦14,000",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80",
    isCustomizable: true,
    description: "Generous 8-inch single layer sponge crowned with whipped rosettes, strawberry compote, and custom surface inscription."
  },
  {
    id: "prod-onelayer-2",
    name: "Rosette Swirl Single-Layer Cake",
    category: "One-Layered Cakes",
    basePrice: 15500,
    formattedPrice: "₦15,500",
    image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80",
    isCustomizable: true,
    description: "Stunning textured rosette floral piping over a tender sponge layer, personalized with your choice of flavor and note."
  },

  // 4. Cake Parfaits (isCustomizable: false)
  {
    id: "prod-parfait-1",
    name: "Deluxe Red Velvet Parfait Cup",
    category: "Cake Parfaits",
    basePrice: 3500,
    formattedPrice: "₦3,500",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Layers of moist red velvet cake crumbles, rich whipped cream cheese frosting, and chocolate shavings."
  },
  {
    id: "prod-parfait-2",
    name: "Oreo & Chocolate Ganache Parfait",
    category: "Cake Parfaits",
    basePrice: 3800,
    formattedPrice: "₦3,800",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Crushed Oreo cookies paired with silky chocolate sponge cubes, Belgian ganache, and chantilly cream."
  },

  // 5. Cake Loaves (isCustomizable: false)
  {
    id: "prod-loaf-1",
    name: "Rich Marble Butter Loaf",
    category: "Cake Loaves",
    basePrice: 5000,
    formattedPrice: "₦5,000",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Freshly sliced traditional marble pound cake loaf with swirling cocoa and creamy vanilla butter sponge."
  },
  {
    id: "prod-loaf-2",
    name: "Glazed Lemon Drizzle Loaf",
    category: "Cake Loaves",
    basePrice: 5500,
    formattedPrice: "₦5,500",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Bright, zesty lemon infused tea loaf finished with a crystalline citrus glaze."
  },

  // 6. Banana Bread (isCustomizable: false)
  {
    id: "prod-banana-1",
    name: "Artisan Walnut Choc-Chip Banana Bread",
    category: "Banana Bread",
    basePrice: 4500,
    formattedPrice: "₦4,500",
    image: "https://images.unsplash.com/photo-1605698802003-9b7e9fb1972b?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Super moist, naturally sweetened ripe banana bread packed with toasted walnuts and dark chocolate drops."
  },
  {
    id: "prod-banana-2",
    name: "Classic Sweet Cinnamon Banana Loaf",
    category: "Banana Bread",
    basePrice: 4000,
    formattedPrice: "₦4,000",
    image: "https://images.unsplash.com/photo-1616031037011-08726002f231?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Traditional golden brown banana bread with warm aromatic spices and caramelized crust."
  },

  // 7. Pastries (isCustomizable: false)
  {
    id: "prod-pastry-1",
    name: "Gourmet Flaky Meat Pies (Box of 4)",
    category: "Pastries",
    basePrice: 5000,
    formattedPrice: "₦5,000",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Golden buttery crust filled with rich minced beef, carrots, and seasoned potato filling."
  },
  {
    id: "prod-pastry-2",
    name: "Jumbo Sausage Rolls (Pack of 5)",
    category: "Pastries",
    basePrice: 4500,
    formattedPrice: "₦4,500",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Flaky puff pastry wrapped around savory seasoned beef sausage, baked to golden crisp perfection."
  },

  // 8. Small Chops (isCustomizable: false)
  {
    id: "prod-chops-1",
    name: "Celebration Small Chops Fiesta Platter",
    category: "Small Chops",
    basePrice: 12000,
    formattedPrice: "₦12,000",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Party favorite: Crispy beef samosas, vegetable spring rolls, fluffy golden puff-puff, peppered chicken skewers, and gizzdodo."
  },
  {
    id: "prod-chops-2",
    name: "Mini Party Small Chops Box",
    category: "Small Chops",
    basePrice: 6500,
    formattedPrice: "₦6,500",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Personal party box containing crispy samosas, spring rolls, spicy peppered bites, and sweetened puff-puff."
  },

  // 9. Food Trays (isCustomizable: false)
  {
    id: "prod-tray-1",
    name: "Grand Breakfast & Brunch Food Tray",
    category: "Food Trays",
    basePrice: 35000,
    formattedPrice: "₦35,000",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Lavish gift tray with waffles, mini pancakes, crispy fried chicken, fresh fruit skewer, parfaits, pastries, and gourmet beverage."
  },
  {
    id: "prod-tray-2",
    name: "Executive Savory Grazing Tray",
    category: "Food Trays",
    basePrice: 38000,
    formattedPrice: "₦38,000",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Stunning presentation tray loaded with grilled barbecue meats, spicy wings, pastries, artisan cheeses, dips, and treats."
  },

  // 10. Birthday Surprise Packages (isCustomizable: false)
  {
    id: "prod-pkg-1",
    name: "Ultimate Birthday Joy Surprise Hamper",
    category: "Birthday Surprise Packages",
    basePrice: 48000,
    formattedPrice: "₦48,000",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Complete surprise package: 6-inch mini celebration cake, platter of small chops, 2 cake parfaits, chocolates, celebration foil balloon, and card."
  },
  {
    id: "prod-pkg-2",
    name: "Luxury VIP Celebration Package",
    category: "Birthday Surprise Packages",
    basePrice: 65000,
    formattedPrice: "₦65,000",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    isCustomizable: false,
    description: "Premium gift box with 8-inch bespoke cake, deluxe small chops tray, imported fruit wine, scented candle, customized card, and celebration firecracker."
  }
];

// Expose globally for both browser and test environments
(typeof window !== 'undefined' ? window : globalThis).BAKERY_PRODUCTS = BAKERY_PRODUCTS;
