import { Button, Field, Form } from '@components/ui/forms';

export function NewAccount() {
  return (
    <Form>
      <h1 className="mb-6 text-3xl">Cadastrar</h1>
      <Field
        id="id_nome"
        type="text"
        placeholder="Digite seu nome"
        className="w-[100%] border-amber-900 bg-white focus:border-amber-700 focus:bg-white"
      >
        Nome Completo
      </Field>
      <Field
        id="id_email"
        type="email"
        placeholder="Digite seu email"
        className="w-[100%] border-amber-900 bg-white focus:border-amber-700 focus:bg-white"
      >
        Email
      </Field>
      <Field
        id="id_telefone"
        type="number"
        placeholder="+00 (00) 0000-0000"
        className="w-[100%] border-amber-900 bg-white focus:border-amber-700 focus:bg-white"
      >
        Telefone de Contato
      </Field>
      <Field
        id="id_senha"
        type="password"
        placeholder="**********"
        className="w-[100%] border-amber-900 bg-white focus:border-amber-700 focus:bg-white"
      >
        Digite a Senha
      </Field>
      <Field
        id="id_senha"
        type="password"
        placeholder="**********"
        className="w-[100%] border-amber-900 bg-white focus:border-amber-700 focus:bg-white"
      >
        Confirme sua Senha
      </Field>

      <Button
        type="submit"
        className="mt-5 w-[100%] bg-amber-900 text-white hover:bg-amber-800"
      >
        Avançar
      </Button>
    </Form>
  );
}
