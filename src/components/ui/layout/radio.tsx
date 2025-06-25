import type { InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Radio({ className, name, ...rest }: RadioProps) {
  return (
    <input
      className={`join-item btn lg:btn-lg border-none bg-rose-950 text-white shadow-none ring-rose-800 checked:bg-rose-900 checked:ring-2 hover:bg-rose-900 lg:text-xl ${className}`}
      type="radio"
      aria-label={name}
      {...rest}
    />
  );
}
