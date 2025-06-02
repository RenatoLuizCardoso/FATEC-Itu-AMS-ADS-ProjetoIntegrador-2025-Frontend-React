import type { FormHTMLAttributes, PropsWithChildren } from 'react';

interface FormProps
  extends PropsWithChildren,
    FormHTMLAttributes<HTMLFormElement> {
  title?: string;
}

export function Form({ children, className, title, ...rest }: FormProps) {
  return (
    <form className={`flex h-full w-full ${className}`} {...rest}>
      {children}
    </form>
  );
}
