import { CarouselMenu } from '@components/layout/carousel-menu/carousel-menu';
import { NavbarLayout } from '@components/layout/header';
import type { NavbarItem } from '@components/layout/header';

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
  return (
    <div className="flex min-h-screen min-w-screen flex-col bg-white">
      <NavbarLayout logoText="LogoDaEmpresa" items={items} />
      <CarouselMenu />
      <main>{''}</main>
    </div>
  );
}
