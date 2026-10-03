export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string;
  serves: string;
}

export const products: Product[] = [
  {
    id: 'flower-petal-cake',
    name: 'Flower Petal Cake',
    description: 'An exquisite vanilla cake wrapped in delicate wafer paper petals and adorned with beautiful pink roses.',
    price: 0,
    image: '/images/products/IMG-20261002-WA0030.jpg',
    size: '8 inch',
    serves: '15-20'
  },
  {
    id: 'vintage-bento-cake',
    name: 'Vintage Bento Cake',
    description: 'A charming minimalist vanilla cake with classic vintage piping, perfect for intimate birthday celebrations.',
    price: 0,
    image: '/images/products/IMG-20261002-WA0026.jpg',
    size: '5 inch',
    serves: '2-4'
  },
  {
    id: 'strawberry-box-cake',
    name: 'Strawberry Box Cake',
    description: 'A stunning vanilla cake wrapped in delicate white ribbon and generously topped with fresh strawberries.',
    price: 0,
    image: '/images/products/IMG-20261002-WA0017.jpg',
    size: '7 inch',
    serves: '10-12'
  },
  {
    id: 'graduation-cake',
    name: 'Graduation Cake',
    description: 'A tall, elegant buttercream cake accented with edible gold flakes and topped with a handcrafted graduation cap.',
    price: 0,
    image: '/images/products/IMG-20261002-WA0016.jpg',
    size: '6 inch',
    serves: '8-10'
  },
  {
    id: 'woodland-cake',
    name: 'Woodland Cake',
    description: 'A beautifully rustic chocolate cake designed to look like a tree stump, finished with natural-looking bark texture.',
    price: 0,
    image: '/images/products/Screenshot_20261003_083049_Instagram.png',
    size: '8 inch',
    serves: '15-20'
  },
  {
    id: 'hennessy-barrel-cake',
    name: 'Hennessy Barrel Cake',
    description: 'A statement celebration cake sculpted as a wooden barrel, complete with a Hennessy bottle and ice details.',
    price: 0,
    image: '/images/products/Screenshot_20261003_083256_Instagram.png',
    size: '8 inch',
    serves: '15-20'
  },
  {
    id: 'assorted-cupcakes',
    name: 'Assorted Cupcakes',
    description: 'A box of soft, freshly baked cupcakes featuring vanilla and chocolate bases with various toppings like cherries and toasted coconut.',
    price: 0,
    image: '/images/products/Screenshot_20261003_083936_Instagram.png',
    size: 'Box of 6',
    serves: '6'
  },
  {
    id: 'oreo-brownies',
    name: 'Oreo Brownies',
    description: 'Fudgy, rich chocolate brownies baked with whole Oreo cookies for the ultimate chocolate lover.',
    price: 0,
    image: '/images/products/Screenshot_20261003_083602_Instagram.png',
    size: 'Box of 6',
    serves: '6'
  },
  {
    id: 'strawberry-cake-slices',
    name: 'Strawberry Cake Slices',
    description: 'Soft, freshly baked vanilla and chocolate cake slices topped with a sweet strawberry drizzle.',
    price: 0,
    image: '/images/products/Screenshot_20261003_083306_Instagram.png',
    size: 'Per Slice',
    serves: '1'
  },
  {
    id: 'cake-parfait',
    name: 'Cake Parfait',
    description: 'Layers of rich cake and smooth whipped cream packed in a convenient cup. A delightful sweet treat on the go.',
    price: 0,
    image: '/images/products/Screenshot_20261003_083020_Instagram.png',
    size: 'Standard Cup',
    serves: '1'
  },
  {
    id: 'small-food-tray',
    name: 'Small Food Tray',
    description: 'A savory assortment featuring jollof rice, fresh garden salad, peppered meat, and a refreshing drink.',
    price: 0,
    image: '/images/products/Screenshot_20261003_082945_Instagram.png',
    size: 'Standard Tray',
    serves: '1'
  }
];
