import type { NavbarItem } from '@components/layout/header';
import type { MenuItemType } from '@components/layout/menu/card-item';

export const categories = [
  'Todos',
  'Entradas',
  'Pratos Principais',
  'Frutos do Mar',
  'Massas',
  'Sobremesas',
  'Bebidas',
];

export const featuredDishes = [
  {
    id: 'slide-0',
    name: 'Filé Gourmet',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
    description: 'Corte premium com legumes sazonais',
  },
  {
    id: 'slide-1',
    name: 'Delícia do Mar',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80',
    description: 'Peixe do dia com molho de manteiga e limão',
  },
  {
    id: 'slide-2',
    name: 'Massa da Casa',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80',
    description: 'Massa artesanal com molho cremoso de trufas',
  },
];

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: 'Bruschetta',
    description:
      'Pão torrado com tomates frescos, manjericão e um fio de azeite',
    price: 9.5,
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80',
    categoryId: 'Entradas',
  },
  {
    id: 2,
    name: 'Salada Caprese',
    description:
      'Mussarela fresca, tomates e manjericão com redução de balsâmico',
    price: 12.0,
    image:
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80',
    categoryId: 'Entradas',
  },
  {
    id: 3,
    name: 'Salmão Grelhado',
    description: 'Salmão do Atlântico ao molho de manteiga e limão com legumes',
    price: 24.95,
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80',
    categoryId: 'Frutos do Mar',
  },
  {
    id: 4,
    name: 'Filé Mignon',
    description:
      'Corte nobre com redução de vinho tinto e purê de batata com trufas',
    price: 35.95,
    image:
      'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80',
    categoryId: 'Pratos Principais',
  },
  {
    id: 5,
    name: 'Ravioli de Lagosta',
    description:
      'Massa recheada com carne de lagosta ao molho cremoso de tomate',
    price: 28.5,
    image:
      'https://www.chiselandfork.com/wp-content/uploads/2020/07/lobster-ravioli-1.jpg',
    categoryId: 'Massas',
  },
  {
    id: 6,
    name: 'Bolo de Chocolate Vulcão',
    description:
      'Bolo quente com centro de chocolate derretido, servido com sorvete',
    price: 12.0,
    image:
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80',
    categoryId: 'Sobremesas',
  },
  {
    id: 7,
    name: 'Camarão ao Alho e Óleo',
    description:
      'Camarões salteados com manteiga, alho e vinho branco sobre linguine',
    price: 22.95,
    image:
      'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80',
    categoryId: 'Frutos do Mar',
  },
  {
    id: 8,
    name: 'Pizza Margherita Clássica',
    description:
      'Pizza de massa fina com molho de tomate, mussarela fresca e manjericão',
    price: 18.0,
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80',
    categoryId: 'Pratos Principais',
  },
  {
    id: 9,
    name: 'Tiramisu',
    description:
      'Sobremesa italiana com camadas de biscoito embebido em café e creme mascarpone',
    price: 10.5,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80',
    categoryId: 'Sobremesas',
  },
  {
    id: 10,
    name: 'Martini da Casa',
    description:
      'Coquetel especial com vodka premium, flor de sabugueiro e frutas cítricas',
    price: 14.0,
    image:
      'https://drinkviacarota.com/cdn/shop/files/via-carota-signature-martini-375ml-carousel_1.jpg?v=1728501560&width=713',
    categoryId: 'Bebidas',
  },
  {
    id: 11,
    name: 'Carpaccio de Carne',
    description:
      'Fatias finas de carne crua com rúcula, alcaparras e lascas de parmesão',
    price: 16.95,
    image:
      'https://www.anotherfoodblogger.com/wp-content/uploads/2021/11/DSC3153-scaled.jpg',
    categoryId: 'Entradas',
  },
  {
    id: 12,
    name: 'Fettuccine Alfredo',
    description: 'Massa fresca com molho cremoso de parmesão e frango grelhado',
    price: 19.5,
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2025-01-fettucini-alfredo%2FFettuccine-Alfredo-0771_ead026-crop',
    categoryId: 'Massas',
  },
  {
    id: 13,
    name: 'Pãezinhos de Alho',
    description:
      'Pãezinhos amanteigados com alho e salsa, servidos com molho marinara',
    price: 7.5,
    image:
      'https://www.thespruceeats.com/thmb/MrFtErbJj0GY6eOHZCvU0z5MwA0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garlic-breadsticks-4150711-hero-01-a1fd1f54ab6a425aa95196cae3a0b2c0.jpg',
    categoryId: 'Entradas',
  },
  {
    id: 14,
    name: 'Cogumelos Recheados',
    description:
      'Cogumelos assados recheados com cream cheese temperado e farofa crocante',
    price: 11.0,
    image:
      'https://natashaskitchen.com/wp-content/uploads/2023/12/Stuffed-Mushrooms-7-1024x1536.jpg',
    categoryId: 'Entradas',
  },
  {
    id: 15,
    name: 'Spaghetti à Carbonara',
    description:
      'Clássica massa romana com pancetta, parmesão e molho cremoso de ovos',
    price: 20.0,
    image:
      'https://www.umami.recipes/api/image/recipes/jvyITHsCFhlRtUbW1Qgp/images/UnFIikDF0lYbnzCCNaxnEl?w=1080&q=75',
    categoryId: 'Massas',
  },
  {
    id: 16,
    name: 'Vieiras Grelhadas',
    description:
      'Vieiras tenras na manteiga de alho e ervas com toque de raspas de limão',
    price: 26.5,
    image:
      'https://www.onceuponachef.com/images/2022/03/how-to-cook-scallops-2-scaled-1120x1456.jpg',
    categoryId: 'Frutos do Mar',
  },
  {
    id: 17,
    name: 'Frango à Parmegiana',
    description:
      'Peito de frango empanado com molho marinara e mussarela, servido com espaguete',
    price: 21.95,
    image:
      'https://kalejunkie.com/wp-content/uploads/2024/02/KJChickenParmesan_Shot5_110-1024x1536.jpg',
    categoryId: 'Pratos Principais',
  },
  {
    id: 18,
    name: 'Trio de Gelato',
    description: 'Seleção de gelatos artesanais: baunilha, pistache e morango',
    price: 9.0,
    image:
      'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/58383512_10161681017210182_3708298110808621056_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=A3lH31JX8u0Q7kNvwEmMhpo&_nc_oc=AdkY2RIo20pel1rEheFr3gMT4_EqcqbTkV-KfpFd51Rftsxvq2GnXDS0cxr96dGTI3U&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=kxKvI4tYEiuBSLR1kixMug&oh=00_AfJnvfVI8wo4JXNCyebXVVr7SrJjOULnfltbS3jhDDmZMA&oe=68603623',
    categoryId: 'Sobremesas',
  },
  {
    id: 19,
    name: 'Negroni',
    description:
      'Coquetel equilibrado com gin, Campari e vermute doce, servido com gelo',
    price: 13.0,
    image:
      'https://punchdrink.com/wp-content/uploads/2013/10/Artice2-Kingston-Negroni-Rum-Cocktail-Recipe.jpg?resize=500,688',
    categoryId: 'Bebidas',
  },
  {
    id: 20,
    name: 'Martini de Espresso',
    description: 'Coquetel aveludado com vodka, café espresso e licor de café',
    price: 14.5,
    image:
      'https://barossadistilling.com/wp-content/uploads/2024/05/Espresso-Martini-Cocktail-600x600.png',
    categoryId: 'Bebidas',
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
