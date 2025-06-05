import { Button, Field, Form } from '@components/ui/forms';

export function Login() {
  return (
    <Form className="flex-col gap-6">
      <h1 className="text-3xl">Login</h1>
      <Field id="idEmail" type="email" placeholder="Digite seu email">
        Email
      </Field>
      <div className="flex flex-col gap-1">
        <Field id="idPass" type="password" placeholder="**********">
          Digite a Senha
        </Field>
        <a href="*" className="link text-rose-900 hover:text-rose-700">
          Esqueci a senha
        </a>
      </div>

      <Button type="submit">Avançar</Button>
    </Form>
  );
}
