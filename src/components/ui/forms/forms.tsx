import type { FormHTMLAttributes, PropsWithChildren } from 'react';

interface FormProps
  extends PropsWithChildren,
    FormHTMLAttributes<HTMLFormElement> {}

export function Form({ children, ...rest }: FormProps) {
  return <form {...rest}>{children}</form>;
}
