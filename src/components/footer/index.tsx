import { ButtonGroup } from './buttonGroup';

export function Footer() {
  return (
    <footer className="bg-wp-green w-screen p-5">
      <div className="w-[95%] flex flex-col mt-8">
        <div>
          <h3 className="text-zinc-200 text-2xl">Terra & Mesa</h3>
          <p className="text-zinc-400">
            Uma experiência gastronômica que celebra os sabores regionais com um
            toque contemporâneo.
          </p>
          <ButtonGroup />
        </div>
        <div>
          <h3 className="text-zinc-200 text-2xl">Links Rápidos</h3>
          <ul className="text-zinc-400">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">Quem Somos</a>
            </li>
            <li>
              <a href="#Menu">Cardápio</a>
            </li>
            <li>
              <a href="#Event">Eventos</a>
            </li>
            <li>
              <a href="#Contact">Contato</a>
            </li>
          </ul>
        </div>
        <div className="w-full border-b border-zinc-500 my-4" />
        <p className="text-xs text-zinc-500 flex flex-col items-center">
          ©2025 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
