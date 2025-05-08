import { Contatos } from '@components/Contatos';
import { Hero } from '@components/Hero';
// import { HelloWorld } from '@components/helloWorld';
import { Navbar } from '@components/Navbar';
import { QuemSomos } from '@components/quemSomos';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Aqui vai o sessão hero */}
        <Hero />
        <QuemSomos />
        <Contatos />
      </main>
      {/* Coloque o footer aqui */}
    </div>
  );
}
