import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FooterLinkButton } from './link-button';

export function FooterButtonGroup() {
  return (
    <div className="mt-7 flex gap-2">
      <FooterLinkButton icon={Twitter} />
      <FooterLinkButton icon={Facebook} />
      <FooterLinkButton icon={Instagram} />
    </div>
  );
}
