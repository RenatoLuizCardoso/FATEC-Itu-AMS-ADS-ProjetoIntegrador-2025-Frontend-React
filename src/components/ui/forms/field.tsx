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
        className={`input lg:input-lg w-full rounded-lg border-zinc-300 hover:border-rose-300 focus:outline-none ${className}`}
        {...rest}
      />
    </div>
  );
}
