import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@phosphor-icons/react';
import { FooterLinkButton } from './link-button';

export function FooterButtonGroup() {
  return (
    <div className="mt-7 flex gap-2">
      <FooterLinkButton icon={TwitterLogoIcon} />
      <FooterLinkButton icon={FacebookLogoIcon} />
      <FooterLinkButton icon={InstagramLogoIcon} />
    </div>
  );
}
