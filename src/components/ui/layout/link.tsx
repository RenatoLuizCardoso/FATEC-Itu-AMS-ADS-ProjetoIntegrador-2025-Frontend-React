import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    PropsWithChildren {}

export function Link({ children, className, ...rest }: LinkProps) {
  return (
    <a
      {...rest}
      className={`link text-rose-900 hover:text-rose-700 ${className}`}
    >
      {children}
    </a>
  );
}
