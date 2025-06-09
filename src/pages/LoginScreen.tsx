import { Login } from '@components/layout/login';
import { NewAccount } from '@components/layout/new-account';
import { Card, Container, Radio } from '@components/ui/layout';
import { useState } from 'react';

export function LoginScreen() {
  const [selectedOption, setSelectedOption] = useState<'login' | 'newAccount'>(
    'login',
  );

  return (
    <Container className="items-center justify-center lg:text-xl">
      <Card>
        <div className="join flex flex-row justify-center">
          <Radio
            checked={selectedOption === 'login'}
            onClick={() => setSelectedOption('login')}
            name="Login"
            className="w-[50%] rounded-l-lg"
          />
          <Radio
            checked={selectedOption === 'newAccount'}
            onClick={() => setSelectedOption('newAccount')}
            name="Nova Conta"
            className="w-[50%] rounded-r-lg"
          />
        </div>
        <Card>{selectedOption === 'login' ? <Login /> : <NewAccount />}</Card>
      </Card>
    </Container>
  );
}
