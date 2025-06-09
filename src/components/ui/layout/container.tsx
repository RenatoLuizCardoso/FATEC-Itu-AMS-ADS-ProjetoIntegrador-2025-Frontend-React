import type { HTMLAttributes, PropsWithChildren } from 'react';

interface PropsContainer
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

export function Container({ children, className, ...rest }: PropsContainer) {
  return (
    <div
      className={`flex min-h-screen max-w-screen flex-col bg-white text-rose-950 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
