import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
}

export function LinkButton({ icon: Icon, ...props }: LinkButtonProps) {
  return (
    <button
      className="flex size-9 items-center justify-center rounded-4xl bg-wp-gray p-1"
      type="button"
      {...props}
    >
      <Icon size={16} color="#f4f4f5" />
    </button>
  );
}
