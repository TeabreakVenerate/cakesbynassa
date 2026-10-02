export interface Product {
  id: string;
  name: string;
  size: string;
  serves: string;
  price: number;
  category: 'Celebration' | 'Bento' | 'Cupcakes' | 'Chops' | 'Platters';
  stream: 'Pre-order' | 'Same-day';
  image: string;
  description: string;
}

export const products: Product[] = [
  { id: 'c1', name: 'Red Velvet Celebration Cake', size: '8 x 5 in', serves: '8-12', price: 28000, category: 'Celebration', stream: 'Pre-order', image: '/images/products/red-velvet.png', description: 'Deep red layered celebration cake with white cream cheese frosting.' },
  { id: 'c2', name: 'Deluxe Vanilla Bean Cake', size: '10 x 5 in', serves: '16-20', price: 42000, category: 'Celebration', stream: 'Pre-order', image: '/images/products/vanilla-bean.png', description: 'Tall white vanilla bean cake with vanilla buttercream and clean elegant finish.' },
  { id: 'c3', name: 'Chocolate Fudge Tower', size: '12 x 6 in', serves: '25-30', price: 54000, category: 'Celebration', stream: 'Pre-order', image: '/images/products/chocolate-fudge.png', description: 'Rich dark chocolate layered cake with ganache drip.' },
  { id: 'c4', name: 'Korean Bento Lunchbox Cake', size: '4 in', serves: '1-2', price: 12500, category: 'Bento', stream: 'Pre-order', image: '/images/products/bento-lunchbox.png', description: 'Tiny 4-inch cake in a clear bento box with pastel lettering.' },
  { id: 'c5', name: 'Butter Cream Cupcakes (Box of 6)', size: 'Standard', serves: '6', price: 9000, category: 'Cupcakes', stream: 'Same-day', image: '/images/products/cupcakes-box.png', description: 'Swirled buttercream tops in varied pastel colors.' },
  { id: 'c6', name: 'Signature Meat Pie (Pack of 4)', size: 'Regular', serves: '4', price: 7500, category: 'Chops', stream: 'Same-day', image: '/images/products/meat-pie.png', description: 'Golden-brown Nigerian meat pies with flaky crust.' },
  { id: 'c7', name: 'Strawberry Drizzle Cake', size: '8 x 5 in', serves: '8-12', price: 32000, category: 'Celebration', stream: 'Pre-order', image: '/images/products/strawberry-drizzle.png', description: 'White cake with fresh strawberry drizzle.' },
  { id: 'c8', name: 'Party Platter (Mixed Pastries)', size: 'Large tray', serves: '15-20', price: 25000, category: 'Platters', stream: 'Same-day', image: '/images/products/party-platter.png', description: 'Mixed Nigerian pastries including puff puff, spring rolls, and samosa.' }
];
