import { Footer } from '@components/layout/footer';
import { Navbar } from '@components/layout/header';
import { About } from '@components/sections/about';
import { Carousel } from '@components/sections/carousel';
import { Contacts } from '@components/sections/contacts';
import { Hero } from '@components/sections/hero';
import { Container } from '@components/ui/layout';

export function Home() {
  return (
    <Container>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Carousel />
        <Contacts />
      </main>
      <Footer />
    </Container>
  );
}
