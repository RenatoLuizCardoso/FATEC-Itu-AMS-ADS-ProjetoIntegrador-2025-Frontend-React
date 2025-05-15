import { Footer } from '@components/layout/footer';
import { Navbar } from '@components/layout/navbar';
import { Carousel } from '@components/sections/carousel';
// import { HelloWorld } from '@components/hello-World';
import { Contacts } from '@components/sections/contacts';
import { Hero } from '@components/sections/hero';
import { QuemSomos } from '@components/sections/quem-somos';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <Carousel />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
