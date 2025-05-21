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
    <footer className="flex w-screen flex-col items-center bg-wp-green p-5">
      <div className="mt-8 flex w-[77%] flex-col gap-6 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
        <FooterSection title="Terra & Mesa">
          <p>{paragraph.info}</p>
          <FooterButtonGroup />
        </FooterSection>

        <FooterSection as="ul" title="Horários">
          {operatingHours.map(({ label, time }) => (
            <FooterInfo key={label}>
              {' '}
              {label}: {time}
            </FooterInfo>
          ))}
        </FooterSection>

        <FooterSection as="ul" title="Contatos" className="md:mb-3">
          <FooterInfo icon={MapPin}>{contactDetails.address}</FooterInfo>
          <FooterInfo icon={Phone}>{contactDetails.phone}</FooterInfo>
          <FooterInfo icon={Mail}>{contactDetails.email}</FooterInfo>
        </FooterSection>
      </div>
      <div className="my-4 w-[80%] border-zinc-500 border-b" />
      <p className="flex flex-col items-center text-xs text-zinc-500">
        ©2025 Todos os direitos reservados.
      </p>
    </footer>
  );
}
