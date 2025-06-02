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
    type: 'menu',
    label: 'Cardapio',
    href: '/menu',
    section: 'left',
  },
];

export function Booking() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-zinc-500">
      <NavbarLayout logoText="LogoDaEmpresa" items={items} />
    </div>
  );
}
