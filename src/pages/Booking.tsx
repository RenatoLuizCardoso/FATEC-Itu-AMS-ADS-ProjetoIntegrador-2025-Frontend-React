import { type NavbarItem, NavbarLayout } from '@components/layout/header';
import { InfoSection } from '@components/sections/booking';
import { Container } from '@components/ui/container';
import { MapPinIcon } from '@phosphor-icons/react';

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
          <h4 className="mb-2 font-bold text-3xl">Faça sua Reserva</h4>
          <p className="mb-10 text-sm text-zinc-500">
            Experience exceptional dining in an elegant atmosphere. Our
            carefully crafted menu features the finest ingredient and innovative
            culinary techniques.
          </p>
          <h5 className="mb-4 flex items-center gap-1 font-bold text-lg">
            <MapPinIcon size={24} weight="bold" />
            Localização e Horários
          </h5>
          <InfoSection title="Endereço">
            <li>Rua Gourmet Boulevard, 123</li>
            <li>Centro, Cidade 12345</li>
            <li>Telefone: (11) 1234-5678</li>
          </InfoSection>
          <InfoSection title="Horário de Funcionamento">
            <li>Segunda - Sábado: 12:00 - 22:00</li>
            <li>Domingo: Fechado</li>
          </InfoSection>
        </section>
      </main>
    </Container>
  );
}
