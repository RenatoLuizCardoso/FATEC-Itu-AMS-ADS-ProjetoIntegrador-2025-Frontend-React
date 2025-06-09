import type { InputHTMLAttributes, PropsWithChildren } from 'react';

interface RadioProps
  extends PropsWithChildren,
    InputHTMLAttributes<HTMLInputElement> {
  name: string;
  checked?: boolean;
}

export function Radio({
  checked,
  className,
  children,
  name,
  ...rest
}: RadioProps) {
  return (
    <input
      className={`join-item btn lg:btn-lg border-none bg-rose-950 text-white shadow-none checked:bg-rose-900 hover:bg-rose-900 lg:text-xl ${className}`}
      type="radio"
      name={name}
      aria-label={name}
      checked={checked}
      {...rest}
    />
  );
}
