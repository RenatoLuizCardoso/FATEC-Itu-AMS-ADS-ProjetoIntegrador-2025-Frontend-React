import type { InputHTMLAttributes, PropsWithChildren } from 'react';

interface FormFieldProps
  extends PropsWithChildren,
    InputHTMLAttributes<HTMLInputElement> {}

export function Field({ id, className, children, ...rest }: FormFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        className={`w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm hover:border-rose-300 focus:outline-none ${className}`}
        {...rest}
      />
    </div>
  );
}
