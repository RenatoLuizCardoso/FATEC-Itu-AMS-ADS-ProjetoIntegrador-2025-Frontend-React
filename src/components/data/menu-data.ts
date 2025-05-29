import type { MenuItemType } from '@components/layout/menu-item/card-item';

export const categories = [
  'All',
  'Starters',
  'Main Dishes',
  'Seafood',
  'Pasta',
  'Desserts',
  'Drinks',
];

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: 'Bruschetta',
    description:
      'Toasted bread topped with fresh tomatoes, basil, and a drizzle of olive oil',
    price: 9.5,
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80',
    categoryId: 'Starters',
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description:
      'Fresh mozzarella, tomatoes, and basil leaves with balsamic glaze',
    price: 12.0,
    image:
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80',
    categoryId: 'Starters',
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description:
      'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
    price: 24.95,
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80',
    categoryId: 'Seafood',
  },
  {
    id: 4,
    name: 'Filet Mignon',
    description:
      'Prime cut beef tenderloin with red wine reduction and truffle mashed potatoes',
    price: 35.95,
    image:
      'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80',
    categoryId: 'Main Dishes',
  },
  {
    id: 5,
    name: 'Lobster Ravioli',
    description:
      'Homemade pasta filled with lobster meat in a creamy tomato sauce',
    price: 28.5,
    image:
      'https://www.chiselandfork.com/wp-content/uploads/2020/07/lobster-ravioli-1.jpg',
    categoryId: 'Pasta',
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description:
      'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 12.0,
    image:
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80',
    categoryId: 'Desserts',
  },
  {
    id: 7,
    name: 'Shrimp Scampi',
    description:
      'Jumbo shrimp sautéed in garlic butter and white wine, served over linguine',
    price: 22.95,
    image:
      'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80',
    categoryId: 'Seafood',
  },
  {
    id: 8,
    name: 'Classic Margherita Pizza',
    description:
      'Thin crust pizza with San Marzano tomato sauce, fresh mozzarella, and basil',
    price: 18.0,
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80',
    categoryId: 'Main Dishes',
  },
  {
    id: 9,
    name: 'Tiramisu',
    description:
      'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 10.5,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80',
    categoryId: 'Desserts',
  },
  {
    id: 10,
    name: 'Signature Martini',
    description:
      'House specialty cocktail with premium vodka, elderflower, and fresh citrus',
    price: 14.0,
    image:
      'https://drinkviacarota.com/cdn/shop/files/via-carota-signature-martini-375ml-carousel_1.jpg?v=1728501560&width=713',
    categoryId: 'Drinks',
  },
  {
    id: 11,
    name: 'Beef Carpaccio',
    description:
      'Thinly sliced raw beef with arugula, capers, and parmesan shavings',
    price: 16.95,
    image:
      'https://www.anotherfoodblogger.com/wp-content/uploads/2021/11/DSC3153-scaled.jpg',
    categoryId: 'Starters',
  },
  {
    id: 12,
    name: 'Fettuccine Alfredo',
    description: 'Fresh pasta with creamy parmesan sauce and grilled chicken',
    price: 19.5,
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2025-01-fettucini-alfredo%2FFettuccine-Alfredo-0771_ead026-crop',
    categoryId: 'Pasta',
  },
];
