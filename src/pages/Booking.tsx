import { type NavbarItem, NavbarLayout } from '@components/layout/header';
import { InfoSection } from '@components/sections/booking';
import { Button, Field, Form } from '@components/ui/forms';
import { Card, Container } from '@components/ui/layout';
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
    label: 'Cardápio',
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
        <Card className="mb-10 bg-zinc-50">
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
        </Card>
        <Card>
          <Form className="flex-col gap-5">
            <div className="flex gap-5">
              <Field placeholder="Selecione" id="booking_date">
                DATA
              </Field>
              <Field placeholder="Horário" id="booking_hour">
                HORÁRIO
              </Field>
              <Field placeholder="Qtd" id="booking_qtd_persons">
                PESSOAS
              </Field>
            </div>
            <Field
              id="booking_observations"
              placeholder="Restrições alimentares, ocasiões especiais..."
              className="h-20"
            >
              OBSERVAÇÕES
            </Field>
            <Button type="submit">Confirmar Reserva</Button>
          </Form>
        </Card>
      </main>
    </Container>
  );
}
