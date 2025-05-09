import type { PropsWithChildren } from 'react';

interface FooterSectionProps extends PropsWithChildren {
  title: string;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-zinc-200 text-2xl">{title}</h3>
      <div className="text-zinc-400">{children}</div>
    </div>
  );
}
