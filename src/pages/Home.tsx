import { Footer } from '@components/layout/footer';
// import { HelloWorld } from '@components/hello-World';
import { Navbar } from '@components/layout/header';
import { About } from '@components/sections/about';
import { Carousel } from '@components/sections/carousel';
import { Contacts } from '@components/sections/contacts';
import { Hero } from '@components/sections/hero';

export function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Carousel />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
