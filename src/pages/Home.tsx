// import { HelloWorld } from '@components/hello-World';
import { Contatos } from '@components/Contatos';
import { Hero } from '@components/Hero';
import { Navbar } from '@components/Navbar';
import { Carousel } from '@components/carousel';
import { Footer } from '@components/footer';
import { QuemSomos } from '@components/quemSomos';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <Carousel />
        <Contatos />
      </main>
      <Footer />
    </div>
  );
}
