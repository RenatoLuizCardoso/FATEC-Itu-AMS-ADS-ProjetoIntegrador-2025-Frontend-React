import type { HTMLAttributes, PropsWithChildren } from 'react';

interface Card extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

export function Card({ children, className, ...rest }: Card) {
  return (
    <div className={`rounded-lg p-5 shadow ${className}`} {...rest}>
      {children}
    </div>
  );
}
