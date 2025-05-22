import { NavbarLayout } from './navbar-layout';

const mockData = {
  logoText: 'logoDaEmpresa',
  items: [
    {
      type: 'home' as const,
      label: 'Home',
      href: '#home',
    },
    {
      type: 'about' as const,
      label: 'Quem Somos',
      href: '#about',
    },
    {
      type: 'contact' as const,
      label: 'Contatos',
      href: '#contact',
    },
    {
      type: 'login' as const,
      label: 'Login',
      href: 'login',
    },
  ],
};

export function Navbar() {
  return <NavbarLayout {...mockData} />;
}
