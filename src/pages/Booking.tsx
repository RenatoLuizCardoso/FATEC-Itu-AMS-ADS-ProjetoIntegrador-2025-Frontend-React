import { type NavbarItem, NavbarLayout } from '@components/layout/header';

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
    <div className="flex min-h-screen min-w-screen flex-col bg-zinc-500">
      <NavbarLayout logoText="LogoDaEmpresa" items={items} />
      {/* <main></main> */}
    </div>
  );
}
