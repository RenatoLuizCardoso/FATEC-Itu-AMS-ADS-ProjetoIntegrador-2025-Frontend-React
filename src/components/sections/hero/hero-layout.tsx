import { Link } from 'react-router';

type HeroButton = {
  info: string;
  path: string;
};

type HeroProps = {
  title: string;
  buttons: HeroButton[];
  img: string;
};

export function HeroLayout({ title, buttons, img }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] w-full items-center bg-center bg-cover py-16"
    >
      <div className="absolute inset-0 z-10 bg-black/40">{''}</div>

      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
        }}
      >
        {''}
      </div>

      {/* Conteúdo da sessão hero */}
      <div className="relative z-20 mx-auto max-w-4xl px-10 text-center">
        <h1 className="mb-8 font-bold font-playfair text-4xl text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-white/90 text-xl drop-shadow-md md:text-2xl">
          Uma frase agradável aos olhos do cliente
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {buttons.map(({ info, path }) => (
            <Link to={`${path}`} key={info}>
              <button
                key={info}
                type="button"
                className="transform cursor-pointer rounded-full bg-amber-900 px-8 py-3 font-medium text-lg text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-900/80 focus:outline-none focus:ring-4 focus:ring-amber-bg-amber-900/50 sm:w-40"
              >
                {info}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
