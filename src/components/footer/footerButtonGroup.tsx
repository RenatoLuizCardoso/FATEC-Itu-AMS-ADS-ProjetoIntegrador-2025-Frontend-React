import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FooterLinkButton } from './footerLinkButton';

export function FooterButtonGroup() {
  return (
    <div className="flex gap-2 my-7">
      <FooterLinkButton icon={Twitter} />
      <FooterLinkButton icon={Facebook} />
      <FooterLinkButton icon={Instagram} />
    </div>
  );
}
