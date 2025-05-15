import type { ElementType, PropsWithChildren } from 'react';

interface FooterSectionProps<T extends ElementType = 'div'>
  extends PropsWithChildren {
  title: string;
  as?: T;
}

export function FooterSection<T extends ElementType = 'div'>({
  title,
  children,
  as,
}: FooterSectionProps<T>) {
  const Component = as || 'div';

  return (
    <div className="mt-3">
      <h3 className="text-xl text-zinc-200">{title}</h3>
      <Component className="text-zinc-400">{children}</Component>
    </div>
  );
}
