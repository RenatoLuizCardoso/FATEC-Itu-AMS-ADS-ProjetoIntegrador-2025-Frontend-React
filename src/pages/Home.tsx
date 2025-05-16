import { Footer } from '@components/layout/footer';
import { Navbar } from '@components/layout/navbar';
import { About } from '@components/sections/about';
import { Carousel } from '@components/sections/carousel';
// import { HelloWorld } from '@components/hello-World';
import { Contacts } from '@components/sections/contacts';
import { Hero } from '@components/sections/hero';

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
