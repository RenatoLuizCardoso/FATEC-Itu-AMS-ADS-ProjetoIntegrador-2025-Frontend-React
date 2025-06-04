import type { HTMLAttributes, PropsWithChildren } from 'react';

interface PropsContainer
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

export function Container({ children, className, ...rest }: PropsContainer) {
  return (
    <div
      className={`flex h-screen w-screen flex-col bg-white text-rose-950 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
