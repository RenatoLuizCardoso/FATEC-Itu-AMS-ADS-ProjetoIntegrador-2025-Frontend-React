import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

interface FooterLinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
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
      <Icon size={16} className="text-zinc-200" />
    </button>
  );
}
