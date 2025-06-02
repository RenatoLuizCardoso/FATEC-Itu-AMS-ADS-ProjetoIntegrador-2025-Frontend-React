import type { NavbarItem } from '@components/layout/header';
import type { MenuItemType } from '@components/layout/menu/card-item';

export const categories = [
  'All',
  'Starters',
  'Main Dishes',
  'Seafood',
  'Pasta',
  'Desserts',
  'Drinks',
];

export const featuredDishes = [
  {
    id: 'slide-0',
    name: 'Gourmet Steak',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
    description: 'Premium cut with seasonal vegetables',
  },
  {
    id: 'slide-1',
    name: 'Seafood Delight',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80',
    description: 'Fresh catch of the day with lemon butter sauce',
  },
  {
    id: 'slide-2',
    name: 'Signature Pasta',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80',
    description: 'Handmade pasta with truffle cream sauce',
  },
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
  {
    id: 13,
    name: 'Garlic Breadsticks',
    description:
      'Warm, buttery breadsticks with garlic and parsley, served with marinara sauce',
    price: 7.5,
    image:
      'https://www.thespruceeats.com/thmb/MrFtErbJj0GY6eOHZCvU0z5MwA0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garlic-breadsticks-4150711-hero-01-a1fd1f54ab6a425aa95196cae3a0b2c0.jpg',
    categoryId: 'Starters',
  },
  {
    id: 14,
    name: 'Stuffed Mushrooms',
    description:
      'Baked mushrooms filled with herbed cream cheese and breadcrumbs',
    price: 11.0,
    image:
      'https://natashaskitchen.com/wp-content/uploads/2023/12/Stuffed-Mushrooms-7-1024x1536.jpg',
    categoryId: 'Starters',
  },
  {
    id: 15,
    name: 'Spaghetti Carbonara',
    description:
      'Classic Roman pasta with pancetta, parmesan, and a creamy egg sauce',
    price: 20.0,
    image:
      'https://www.umami.recipes/api/image/recipes/jvyITHsCFhlRtUbW1Qgp/images/UnFIikDF0lYbnzCCNaxnEl?w=1080&q=75',
    categoryId: 'Pasta',
  },
  {
    id: 16,
    name: 'Pan-Seared Scallops',
    description:
      'Tender scallops in garlic herb butter, served with a touch of lemon zest',
    price: 26.5,
    image:
      'https://www.onceuponachef.com/images/2022/03/how-to-cook-scallops-2-scaled-1120x1456.jpg',
    categoryId: 'Seafood',
  },
  {
    id: 17,
    name: 'Chicken Parmesan',
    description:
      'Breaded chicken breast topped with marinara and mozzarella, served with spaghetti',
    price: 21.95,
    image:
      'https://kalejunkie.com/wp-content/uploads/2024/02/KJChickenParmesan_Shot5_110-1024x1536.jpg',
    categoryId: 'Main Dishes',
  },
  {
    id: 18,
    name: 'Gelato Trio',
    description:
      'A selection of artisanal gelato flavors: vanilla, pistachio, and strawberry',
    price: 9.0,
    image:
      'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/58383512_10161681017210182_3708298110808621056_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=A3lH31JX8u0Q7kNvwEmMhpo&_nc_oc=AdkY2RIo20pel1rEheFr3gMT4_EqcqbTkV-KfpFd51Rftsxvq2GnXDS0cxr96dGTI3U&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=kxKvI4tYEiuBSLR1kixMug&oh=00_AfJnvfVI8wo4JXNCyebXVVr7SrJjOULnfltbS3jhDDmZMA&oe=68603623',
    categoryId: 'Desserts',
  },
  {
    id: 19,
    name: 'Negroni',
    description:
      'A balanced cocktail with gin, Campari, and sweet vermouth, served over ice',
    price: 13.0,
    image:
      'https://punchdrink.com/wp-content/uploads/2013/10/Artice2-Kingston-Negroni-Rum-Cocktail-Recipe.jpg?resize=500,688',
    categoryId: 'Drinks',
  },
  {
    id: 20,
    name: 'Espresso Martini',
    description:
      'Velvety coffee-flavored cocktail with vodka, espresso, and coffee liqueur',
    price: 14.5,
    image:
      'https://barossadistilling.com/wp-content/uploads/2024/05/Espresso-Martini-Cocktail-600x600.png',
    categoryId: 'Drinks',
  },
];

export const items: NavbarItem[] = [
  {
    type: 'login',
    label: 'Login',
    href: '/login',
    section: 'right',
  },
  {
    type: 'home',
    label: 'Home',
    href: '/',
    section: 'left',
  },
  {
    type: 'booking',
    label: 'Reservar',
    href: '/booking',
    section: 'left',
  },
];
