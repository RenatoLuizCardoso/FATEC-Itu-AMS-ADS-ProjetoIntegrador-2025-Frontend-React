import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface ContactInfoProps extends PropsWithChildren {
  icon: LucideIcon;
}

export function ContactInfo({ children, icon: Icon }: ContactInfoProps) {
  return (
    <li className="flex flex-row gap-1 items-center">
      <Icon size="20" />
      {children}
    </li>
  );
}
