import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface FooterInfoProps extends PropsWithChildren {
  icon?: LucideIcon;
}

export function FooterInfo({ children, icon: Icon }: FooterInfoProps) {
  return (
    <li className="flex flex-row">
      {Icon && <Icon size={20} />}
      {children}
    </li>
  );
}
