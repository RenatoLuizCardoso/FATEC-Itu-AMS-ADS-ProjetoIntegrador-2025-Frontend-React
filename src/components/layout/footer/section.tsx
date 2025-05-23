import type { ElementType, PropsWithChildren } from 'react';

interface FooterSectionProps<T extends ElementType = 'div'>
  extends PropsWithChildren {
  title: string;
  as?: T;
  className?: string;
}

export function FooterSection<T extends ElementType = 'div'>({
  title,
  children,
  as,
  className,
}: FooterSectionProps<T>) {
  const Component = as || 'div';

  return (
    <div className={`mt-3 lg:mt-0 ${className}`}>
      <h3 className="mb-1 text-xl text-zinc-200">{title}</h3>
      <Component className={`space-y-1.5 text-zinc-400 ${className}`}>
        {children}
      </Component>
    </div>
  );
}
