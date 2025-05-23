import { NavbarLayout } from './navbar-layout';
import type { NavbarItem } from './navbar-layout'; // importa o tipo

const items: NavbarItem[] = [
  {
    type: 'home',
    label: 'Home',
    href: '#home',
    section: 'left',
  },
  {
    type: 'about',
    label: 'Quem Somos',
    href: '#about',
    section: 'left',
  },
  {
    type: 'contact',
    label: 'Contatos',
    href: '#contact',
    section: 'right',
  },
  {
    type: 'login',
    label: 'Login',
    href: 'login',
    section: 'right',
  },
];

const mockData = {
  logoText: 'logoDaEmpresa',
  items,
};

export function Navbar() {
  return <NavbarLayout {...mockData} />;
}
