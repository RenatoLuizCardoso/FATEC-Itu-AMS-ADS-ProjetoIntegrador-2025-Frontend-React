import type { InputHTMLAttributes, PropsWithChildren } from 'react';

interface FormFieldProps
  extends PropsWithChildren,
    InputHTMLAttributes<HTMLInputElement> {}

export function Field({ id, className, children, ...rest }: FormFieldProps) {
  return (
    <div className="mb-5">
      <label className="block" htmlFor={id}>
        {children}
      </label>
      <input
        id={id}
        className={`rounded-xl border-3 px-4 py-3 leading-tight shadow focus:shadow-outline focus:outline-none ${className}`}
        {...rest}
      />
    </div>
  );
}
