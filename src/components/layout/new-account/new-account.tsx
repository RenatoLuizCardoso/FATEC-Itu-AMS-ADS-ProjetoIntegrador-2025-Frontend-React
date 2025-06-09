import { Button, Field, Form } from '@components/ui/forms';

export function NewAccount() {
  return (
    <Form className="flex-col gap-6">
      <h1 className="text-3xl lg:text-5xl">Cadastrar</h1>
      <Field id="idName" type="text" placeholder="Digite seu nome">
        Nome Completo
      </Field>
      <Field id="idEmail" type="email" placeholder="Digite seu email">
        Email
      </Field>
      <Field id="idPhone" type="tel" placeholder="+00 (00) 0000-0000">
        Telefone de Contato
      </Field>
      <Field id="idPass" type="password" placeholder="**********">
        Digite a Senha
      </Field>
      <Field id="idPassConfirm" type="password" placeholder="**********">
        Confirme sua Senha
      </Field>

      <Button type="submit">Avançar</Button>
    </Form>
  );
}
