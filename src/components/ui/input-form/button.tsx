import type { HTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren, HTMLAttributes<'div'> {
  label: string;
  className: string;
}

export function Button({ label, className }: ButtonProps) {
  return (
    <button className={`rounded-2xl px-4 py-2 ${className}`} type="submit">
      {label}
    </button>
  );
}
