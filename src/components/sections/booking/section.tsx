import type { PropsWithChildren } from 'react';

interface InfoSectionProps extends PropsWithChildren {
  title: string;
}

export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <>
      <h6>{title}</h6>
      <ul className="mb-4 text-sm text-zinc-500">{children}</ul>
    </>
  );
}
