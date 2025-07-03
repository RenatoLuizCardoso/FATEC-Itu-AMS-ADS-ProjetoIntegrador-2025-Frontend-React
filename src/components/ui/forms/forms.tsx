import type { FormHTMLAttributes, PropsWithChildren } from 'react';

interface FormProps
  extends PropsWithChildren,
    FormHTMLAttributes<HTMLFormElement> {}

export function Form({ children, className, ...rest }: FormProps) {
  return (
    <form className={`flex h-full w-full ${className}`} {...rest}>
      {children}
    </form>
  );
}
