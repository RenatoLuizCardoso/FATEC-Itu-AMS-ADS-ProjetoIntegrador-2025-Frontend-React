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
      className={`cursor-pointer rounded-2xl px-4 py-3 shadow focus:shadow-outline focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
