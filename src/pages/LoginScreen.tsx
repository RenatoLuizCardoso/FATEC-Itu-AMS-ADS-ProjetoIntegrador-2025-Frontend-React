import { Login } from '@components/layout/login';
import { NewAccount } from '@components/layout/new-account';
import { Container } from '@components/ui/container';

export function LoginScreen() {
  return (
    <Container>
      <NewAccount />
      <Login />
    </Container>
  );
}
