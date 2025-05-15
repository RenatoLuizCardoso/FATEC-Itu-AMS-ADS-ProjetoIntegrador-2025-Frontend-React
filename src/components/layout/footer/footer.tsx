import { Mail, MapPin, Phone } from 'lucide-react';
import { FooterButtonGroup } from './button-group';
import { FooterInfo } from './info';
import { FooterSection } from './section';

const paragraph = {
  info: 'Uma experiência gastronômica que celebra os sabores regionais com um toque contemporâneo.',
};

const operatingHours = [
  { label: 'Terça a Quinta', time: '18h às 23h' },
  { label: 'Sexta e Sábado', time: '12h às 15h e 18h às 00h' },
  { label: 'Domingo', time: '12h às 17h' },
  { label: 'Segunda', time: 'Fechado' },
];

const contactDetails = {
  address: 'Rua das Oliveiras, 123, Vale Verde, SP',
  phone: '(11) 4567-8901',
  email: 'contato@empresa.com.br',
};

export function Footer() {
  return (
    <footer className="bg-wp-green w-screen flex flex-col items-center p-5">
      <div className="w-[80%] flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 mt-8">
        <FooterSection title="Terra & Mesa">
          <p>{paragraph.info}</p>
          <FooterButtonGroup />
        </FooterSection>

        <FooterSection as="ul" title="Horários">
          {operatingHours.map(({ label, time }) => (
            <FooterInfo key={label}>
              {' '}
              {label} : {time}
            </FooterInfo>
          ))}
        </FooterSection>

        <FooterSection as="ul" title="Contatos">
          <FooterInfo icon={MapPin}>{contactDetails.address}</FooterInfo>
          <FooterInfo icon={Phone}>{contactDetails.phone}</FooterInfo>
          <FooterInfo icon={Mail}>{contactDetails.email}</FooterInfo>
        </FooterSection>
      </div>
      <div className="w-[80%] border-b border-zinc-500 my-4" />
      <p className="text-xs text-zinc-500 flex flex-col items-center">
        ©2025 Todos os direitos reservados.
      </p>
    </footer>
  );
}
