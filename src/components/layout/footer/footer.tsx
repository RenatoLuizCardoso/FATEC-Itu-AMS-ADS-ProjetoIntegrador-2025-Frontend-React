import { Mail, MapPin, Phone } from 'lucide-react';
import { FooterButtonGroup } from './button-group';
import { FooterInfo } from './info';
import { FooterSection } from './section';

export function Footer() {
  return (
    <footer className="bg-wp-green w-screen flex flex-col items-center p-5">
      <div className="w-[80%] flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 mt-8">
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
      <div className="w-[80%] border-b border-zinc-500 my-4" />
      <p className="text-xs text-zinc-500 flex flex-col items-center">
        ©2025 Todos os direitos reservados.
      </p>
    </footer>
  );
}
