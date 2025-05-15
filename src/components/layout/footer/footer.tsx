import { Mail, MapPin, Phone } from 'lucide-react';
import { FooterButtonGroup } from './button-group';
import { FooterInfo } from './info';
import { FooterSection } from './section';

export function Footer() {
  return (
    <footer className="flex w-screen flex-col items-center bg-wp-green p-5">
      <div className="mt-8 flex w-[80%] flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
        <FooterSection title="Terra & Mesa">
          <p>
            Uma experiência gastronômica que celebra os sabores regionais com um
            toque contemporâneo.
          </p>
          <FooterButtonGroup />
        </FooterSection>
        <FooterSection as="ul" title="Horários">
          <FooterInfo>Terça a Quinta:18h às 23h</FooterInfo>
          <FooterInfo>Sexta e Sábado: 12h às 15h e 18h às 00h</FooterInfo>
          <FooterInfo>Domingo: 12h às 17h</FooterInfo>
          <FooterInfo>Segunda: Fechado</FooterInfo>
        </FooterSection>
        <FooterSection as="ul" title="Contatos">
          <FooterInfo icon={MapPin}>
            Rua das Oliveiras, 123, Vale Verde, SP
          </FooterInfo>
          <FooterInfo icon={Phone}>(11) 4567-8901</FooterInfo>
          <FooterInfo icon={Mail}>contato@terraemesa.com.br</FooterInfo>
        </FooterSection>
      </div>
      <div className="my-4 w-[80%] border-zinc-500 border-b" />
      <p className="flex flex-col items-center text-xs text-zinc-500">
        ©2025 Todos os direitos reservados.
      </p>
    </footer>
  );
}
