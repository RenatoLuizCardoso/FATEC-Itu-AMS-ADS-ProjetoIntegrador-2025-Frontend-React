import { CarouselMenu } from '@components/layout/carousel-menu/carousel-menu';
import { type NavbarItem, NavbarLayout } from '@components/layout/header';
import { CardItem } from '@components/layout/menu/card-item';
import { CategorySelector } from '@components/layout/menu/category-menu';
import { categories, menuItems } from '@data/menu-data';
import { useState } from 'react';

const items: NavbarItem[] = [
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

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div className="flex min-h-screen max-w-screen flex-col bg-white">
      <NavbarLayout
        logoText="LogoDaEmpresa"
        items={items}
        heightScrollSize={0.47}
      />
      <CarouselMenu />
      <main>
        <CategorySelector
          categories={categories}
          selected={activeCategory}
          onSelect={setActiveCategory}
        />
        <CardItem menuItems={menuItems} onSelectCategory={activeCategory} />
      </main>
    </div>
  );
}
