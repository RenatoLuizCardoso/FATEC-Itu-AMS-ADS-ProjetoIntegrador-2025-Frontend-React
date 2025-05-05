import { HelloWorld } from '@components/helloWorld';
import { Navbar } from '@components/navbar';
import { QuemSomos } from '@components/quemSomos';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Aqui vai o sessão hero */}
        <QuemSomos />
      </main>
      {/* Coloque o footer aqui */}
    </div>
  );
}
