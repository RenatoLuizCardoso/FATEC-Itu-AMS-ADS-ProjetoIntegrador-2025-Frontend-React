import { ButtonGroup } from './buttonGroup';

export function Footer() {
  return (
    <footer className="bg-wp-green w-screen p-5">
      <div className="w-[95%] flex flex-col items-center mt-8">
        <div>
          <h1 className="text-zinc-200 text-2xl">Terra & Mesa</h1>
          <p className="text-zinc-400">
            Uma experiência gastronômica que celebra os sabores regionais com um
            toque contemporâneo.
          </p>
          <ButtonGroup />
        </div>
        <div className="w-full border-b border-zinc-500 my-4" />
        <p className="text-xs text-zinc-500">
          ©2025 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
