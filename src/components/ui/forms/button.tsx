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
      className={`btn lg:btn-lg rounded-lg border-none bg-rose-950 text-white hover:bg-rose-900 lg:text-xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
