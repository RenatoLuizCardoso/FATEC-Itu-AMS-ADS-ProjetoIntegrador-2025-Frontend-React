import { FooterLayout } from './footer-layout';

const mockData = {
  info: {
    title: { brand: 'Terra & Mesa', hours: 'Horários', contact: 'Contatos' },
    paragraph:
      'Uma experiência gastronômica que celebra os sabores regionais com um toque contemporâneo.',
  },
  operatingHours: [
    { label: 'Terça a Quinta', time: '18h às 23h' },
    { label: 'Sexta e Sábado', time: '12h às 15h e 18h às 00h' },
    { label: 'Domingo', time: '12h às 17h' },
    { label: 'Segunda', time: 'Fechado' },
  ],
  contactDetails: {
    address: 'Rua das Oliveiras, 123, Vale Verde, SP',
    phone: '(11) 4567-8901',
    email: 'contato@empresa.com.br',
  },
};

export function Footer() {
  return <FooterLayout {...mockData} />;
}
