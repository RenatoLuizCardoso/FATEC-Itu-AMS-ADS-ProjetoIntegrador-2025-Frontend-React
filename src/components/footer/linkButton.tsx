import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface LinkButtonProps extends PropsWithChildren {
  icon: LucideIcon;
}

export function LinkButton({ icon: Icon }: LinkButtonProps) {
  return (
    <button
      className="flex size-9 items-center justify-center rounded-4xl bg-wp-gray p-1"
      type="button"
    >
      <Icon size={16} color="#f4f4f5" />
    </button>
  );
}
