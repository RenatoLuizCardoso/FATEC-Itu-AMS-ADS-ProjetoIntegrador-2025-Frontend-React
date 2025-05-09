// import { HelloWorld } from '@components/hello-World';
import { Contatos } from '@components/Contatos';
import { Hero } from '@components/Hero';
import { Navbar } from '@components/Navbar';
import { Carrousel } from '@components/carrousel';
import { QuemSomos } from '@components/quemSomos';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Aqui vai o sessão hero */}
        <Hero />
        <QuemSomos />
        <Carrousel />
        <Contatos />
      </main>
      {/* Coloque o footer aqui */}
    </div>
  );
}
