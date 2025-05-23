import { Mail, MapPin, Phone } from 'lucide-react';
import { FooterButtonGroup } from './button-group';
import { FooterInfo } from './info';
import { FooterSection } from './section';

type SectionTitle = {
  brand: string;
  hours: string;
  contact: string;
};
type Info = {
  title: SectionTitle;
  paragraph: string;
};
type OperatingHours = {
  label: string;
  time: string;
};
type ContactDetails = {
  address: string;
  phone: string;
  email: string;
};

type FooterProps = {
  info: Info;
  operatingHours: OperatingHours[];
  contactDetails: ContactDetails;
};

export function FooterLayout({
  info,
  operatingHours,
  contactDetails,
}: FooterProps) {
  return (
    <footer className="flex w-full flex-col items-center bg-wp-green p-5">
      <div className="mt-8 flex w-[77%] max-w-6xl flex-col gap-6 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
        <FooterSection title={info.title.brand}>
          <p>{info.paragraph}</p>
          <FooterButtonGroup />
        </FooterSection>

        <FooterSection as="ul" title={info.title.hours}>
          {operatingHours.map(({ label, time }) => (
            <FooterInfo key={label}>
              {' '}
              {label}: {time}
            </FooterInfo>
          ))}
        </FooterSection>

        <FooterSection as="ul" title={info.title.contact} className="md:mb-3">
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
