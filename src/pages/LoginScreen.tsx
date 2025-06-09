import { Login } from '@components/layout/login';
import { NewAccount } from '@components/layout/new-account';
import { Container } from '@components/ui/layout';

export function LoginScreen() {
  return (
    <Container>
      <NewAccount />
      <Login />
    </Container>
  );
}
