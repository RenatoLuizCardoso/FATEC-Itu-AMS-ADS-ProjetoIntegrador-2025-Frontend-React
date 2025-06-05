import { type NavbarItem, NavbarLayout } from '@components/layout/header';
import { Container } from '@components/ui/container';

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
    <Container>
      <NavbarLayout
        logoText="LogoDaEmpresa"
        items={items}
        className="relative bg-rose-950"
      />
      <main className="mx-6 my-2">
        <section className="rounded-lg bg-zinc-50 p-5 shadow">
          <h3 className="mb-2 font-bold text-3xl">Faça sua Reserva</h3>
          <p className="mb-6 text-sm text-zinc-600">
            Experience exceptional dining in an elegant atmosphere. Our
            carefully crafted menu features the finest ingredient and innovative
            culinary techniques.
          </p>
        </section>
      </main>
    </Container>
  );
}
