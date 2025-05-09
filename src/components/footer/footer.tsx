import { Mail, MapPin, Phone } from 'lucide-react';
import { FooterButtonGroup } from './footerButtonGroup';
import { FooterInfo } from './footerInfo';
import { FooterSection } from './footerSection';

export function Footer() {
  return (
    <footer className="bg-wp-green w-screen p-5">
      <div className="w-[95%] flex flex-col mt-8">
        <FooterSection title="Terra & Mesa">
          <p>
            Uma experiência gastronômica que celebra os sabores regionais com um
            toque contemporâneo.
          </p>
          <FooterButtonGroup />
        </FooterSection>
        <FooterSection as="ul" title="Links Rápidos">
          <FooterInfo>
            <a href="#Home">Home</a>
          </FooterInfo>
          <FooterInfo>
            <a href="#About">Quem Somos</a>
          </FooterInfo>
          <FooterInfo>
            <a href="#Menu">Cardápio</a>
          </FooterInfo>
          <FooterInfo>
            <a href="#Event">Eventos</a>
          </FooterInfo>
          <FooterInfo>
            <a href="#Contact">Contato</a>
          </FooterInfo>
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
        <div className="w-full border-b border-zinc-500 my-4" />
        <p className="text-xs text-zinc-500 flex flex-col items-center">
          ©2025 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
