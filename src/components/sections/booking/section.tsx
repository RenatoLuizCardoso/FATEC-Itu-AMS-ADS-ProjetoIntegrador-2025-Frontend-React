import type { HTMLAttributes, PropsWithChildren } from 'react';

interface BookingSectionProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {}

export function BookingSection({
  children,
  className,
  ...rest
}: BookingSectionProps) {
  return (
    <section className={`rounded-lg p-5 shadow ${className}`} {...rest}>
      {children}
    </section>
  );
}
