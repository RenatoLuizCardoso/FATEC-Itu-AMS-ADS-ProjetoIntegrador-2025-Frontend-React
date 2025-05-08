import { Hero } from '@components/Hero';
import { Navbar } from '@components/Navbar';
import { Footer } from '@components/footer';
import { QuemSomos } from '@components/quemSomos';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Aqui vai o sessão hero */}
        <Hero />
        <QuemSomos />
      </main>
      <Footer />
      {/* Coloque o footer aqui */}
    </div>
  );
}
