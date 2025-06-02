import { CarouselMenu } from '@components/layout/carousel-menu/carousel-menu';
import { NavbarLayout } from '@components/layout/header';
import { CardItem } from '@components/layout/menu/card-item';
import { CategorySelector } from '@components/layout/menu/category-selector';
import { categories, items, menuItems } from '@data/menu-data';
import { useState } from 'react';

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
