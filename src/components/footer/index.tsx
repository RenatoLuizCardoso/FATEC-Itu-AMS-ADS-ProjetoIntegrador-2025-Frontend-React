import { Mail, MapPin, Phone } from 'lucide-react';
import { ButtonGroup } from './buttonGroup';
import { ContactInfo } from './contactInfo';
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
          <ButtonGroup />
        </FooterSection>
        <FooterSection title="Links Rápidos">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">Quem Somos</a>
            </li>
            <li>
              <a href="#Menu">Cardápio</a>
            </li>
            <li>
              <a href="#Event">Eventos</a>
            </li>
            <li>
              <a href="#Contact">Contato</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection title="Horários">
          <ul>
            <li>Terça a Quinta:18h às 23h</li>
            <li>Sexta e Sábado: 12h às 15h e 18h às 00h</li>
            <li>Domingo: 12h às 17h</li>
            <li>Segunda: Fechado</li>
          </ul>
        </FooterSection>
        <FooterSection title="Contatos">
          <ul>
            <ContactInfo icon={MapPin}>
              Rua das Oliveiras, 123, Vale Verde, SP
            </ContactInfo>
            <ContactInfo icon={Phone}>(11) 4567-8901</ContactInfo>
            <ContactInfo icon={Mail}>contato@terraemesa.com.br</ContactInfo>
          </ul>
        </FooterSection>
        <div className="w-full border-b border-zinc-500 my-4" />
        <p className="text-xs text-zinc-500 flex flex-col items-center">
          ©2025 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
