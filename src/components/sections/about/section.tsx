import type { HTMLAttributes, PropsWithChildren } from 'react';

interface AboutSectionProps extends PropsWithChildren, HTMLAttributes<'div'> {
  title: string;
  alt?: string;
  src?: string;
}

export function AboutSection({
  title,
  children,
  src,
  alt,
  className,
}: AboutSectionProps) {
  const classNameGeneric = `flex w-auto flex-col items-center gap-10 ${className}`;

  return (
    <div className={classNameGeneric}>
      <div>
        <h2 className="mb-1 font-bold text-4xl md:text-5xl">{title}</h2>
        <hr className="mb-4 w-25 rounded-xl border-2 border-lime-800" />
        <p className="text-xl leading-relaxed md:text-2xl">{children}</p>
      </div>
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-3xl rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl lg:w-lg"
        />
      )}
    </div>
  );
}
