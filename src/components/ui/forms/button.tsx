import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, type, children, ...rest }: ButtonProps) {
  if (!type) {
    type = 'button';
  }

  return (
    <button
      type={type}
      className={`cursor-pointer rounded-lg bg-rose-950 p-3 text-white hover:bg-rose-900 focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
