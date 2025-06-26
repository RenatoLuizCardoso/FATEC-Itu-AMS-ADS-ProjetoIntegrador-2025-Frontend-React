import { Button, Field, Form } from '@components/ui/forms';
import { Link } from '@components/ui/layout/';

export function Login({ onChangeScreen }: { onChangeScreen: () => void }) {
  return (
    <Form className="flex-col gap-8">
      <h1 className="text-3xl lg:text-5xl">Login</h1>
      <Field id="idEmail" type="email" placeholder="Digite seu email">
        Email
      </Field>
      <div className="flex flex-col gap-1">
        <Field id="idPass" type="password" placeholder="**********">
          Digite a Senha
        </Field>
        <Link href="">Esqueci a senha</Link>
      </div>
      <Button type="submit">Entrar</Button>
      <Link className="mx-auto" onClick={onChangeScreen}>
        Criar nova conta
      </Link>
    </Form>
  );
}
