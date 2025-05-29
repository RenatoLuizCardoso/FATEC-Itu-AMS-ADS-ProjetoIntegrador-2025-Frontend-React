import type { HTMLAttributes, PropsWithChildren } from 'react';

interface FormFieldProps extends PropsWithChildren, HTMLAttributes<'div'> {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}

export function Field({
  id,
  label,
  type,
  placeholder,
  children,
}: FormFieldProps) {
  return (
    <div className="mb-8">
      <div className="md:w-1/3">
        <label className="mb-2 block text-gray-500" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="rounded-xl border-3 border-gray-200 bg-gray-200 px-4 py-2 text-gray-700 leading-tight focus:border-blue-500 focus:bg-white focus:outline-none"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {children}
    </div>
  );
}
