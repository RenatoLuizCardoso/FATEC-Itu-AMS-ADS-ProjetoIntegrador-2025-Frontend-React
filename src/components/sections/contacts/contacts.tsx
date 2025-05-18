import { Layout } from './layout';

const mockData = {
  paragraphInfo:
    'Deseja fazer uma reserva ou tem alguma dúvida? Entre em contato conosco!',
  contacts: [
    {
      type: 'email' as const,
      label: 'Email',
      value: 'nomerestaurante@gmail.com',
      link: 'mailto:nomerestaurante@gmail.com',
    },
    {
      type: 'address' as const,
      label: 'Endereço',
      value:
        'Rua Padre Manoel da Nóbrega, 271 - Vila Almeida, Indaiatuba - SP, CEP 13330-650',
      link: 'https://www.google.com/maps/place/V%C3%B4+Guerino+Bar/@-23.0824954,-47.2922158,13z/',
    },
    {
      type: 'whatsapp' as const,
      label: 'WhatsApp',
      value: '+55 15 7854-2345',
      link: 'https://wa.me/551578542345',
    },
    {
      type: 'phone' as const,
      label: 'Telefone',
      value: '+55 14 54773-1275',
    },
  ],
  operatingHours: [
    { label: 'Terça a Quinta', time: '18h às 23h' },
    { label: 'Sexta e Sábado', time: '12h às 15h e 18h às 00h' },
    { label: 'Domingo', time: '12h às 17h' },
    { label: 'Segunda', time: 'Fechado' },
  ],
};

export function Contacts() {
  return <Layout {...mockData} />;
}
