import type { IconProps } from '@phosphor-icons/react';
import type { ButtonHTMLAttributes } from 'react';

interface FooterLinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconProps>;
}

export function FooterLinkButton({
  icon: Icon,
  ...props
}: FooterLinkButtonProps) {
  return (
    <button
      className="flex size-9 items-center justify-center rounded-4xl bg-wp-gray p-1"
      type="button"
      {...props}
    >
      <Icon size={20} className="text-zinc-200" />
    </button>
  );
}
