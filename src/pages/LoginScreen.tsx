import { type NavbarItem, NavbarLayout } from '@components/layout/header';
import { Login } from '@components/layout/login';
import { NewAccount } from '@components/layout/new-account';
import { Card, Container } from '@components/ui/layout';
import { useState } from 'react';

const items: NavbarItem[] = [
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

export function LoginScreen() {
  const [selectedOption, setSelectedOption] = useState<'login' | 'newAccount'>(
    'login',
  );

  return (
    <Container className="items-center">
      <NavbarLayout
        logoText="LogoDaEmpresa"
        items={items}
        className="relative bg-rose-950"
      />
      <main className="lg:text-xl">
        <Card className="my-10 w-full max-w-md lg:max-w-xl">
          {selectedOption === 'login' ? (
            <Login onChangeScreen={() => setSelectedOption('newAccount')} />
          ) : (
            <NewAccount onChangeScreen={() => setSelectedOption('login')} />
          )}
        </Card>
      </main>
    </Container>
  );
}
