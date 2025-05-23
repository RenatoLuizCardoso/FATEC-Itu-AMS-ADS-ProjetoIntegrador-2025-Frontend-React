import type { IconProps } from '@phosphor-icons/react';
import type { PropsWithChildren } from 'react';

interface FooterInfoProps extends PropsWithChildren {
  icon?: React.ComponentType<IconProps>;
}

export function FooterInfo({ children, icon: Icon }: FooterInfoProps) {
  return (
    <li className="flex flex-row items-center gap-1">
      {Icon && <Icon size={20} />}
      {children}
    </li>
  );
}
