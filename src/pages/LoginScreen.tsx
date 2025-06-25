import { Login } from '@components/layout/login';
import { NewAccount } from '@components/layout/new-account';
import { Card, Container } from '@components/ui/layout';
import { useState } from 'react';

export function LoginScreen() {
  const [selectedOption, setSelectedOption] = useState<'login' | 'newAccount'>(
    'login',
  );

  return (
    <Container className="items-center justify-center lg:text-xl">
      <Card className="w-full max-w-md lg:max-w-xl">
        <div>
          {selectedOption === 'login' ? (
            <Login onChangeScreen={() => setSelectedOption('newAccount')} />
          ) : (
            <NewAccount onChangeScreen={() => setSelectedOption('login')} />
          )}
        </div>
      </Card>
    </Container>
  );
}
