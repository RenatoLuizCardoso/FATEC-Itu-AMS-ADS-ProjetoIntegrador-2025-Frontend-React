import { AboutSection } from './section';

const data = {
  aboutSections: [
    {
      title: 'Nossa Cultura & Pratos',
      content:
        'No Brasa & Alma, usamos ingredientes frescos e regionais para criar pratos brasileiros com um toque moderno. Valorizamos o sabor autêntico, o preparo artesanal e a apresentação caprichada. Nosso cardápio muda com as estações e é pensado para surpreender em cada detalhe.',
    },
    {
      title: 'Nosso Ambiente',
      content:
        'Estamos em um espaço rodeado pela natureza, com um ambiente rústico e acolhedor. A arquitetura mistura madeira, pedra e luz natural para criar um clima calmo e sofisticado. Ideal para encontros especiais, almoços tranquilos ou jantares a dois.',
      src: 'https://f.i.uol.com.br/fotografia/2025/03/13/174191396367d37f6b03ba2_1741913963_3x2_md.jpg',
      alt: 'Interior do Restaurante',
    },
    {
      title: 'Nossa História',
      content:
        'Fundado em 2015 pela chef Helena Monteiro, o Brasa & Alma nasceu com a ideia de unir sabor e afeto. Helena estudou gastronomia na Europa e trouxe para o Brasil uma cozinha que mistura técnica e emoção. Hoje, somos referência em comida artesanal, com prêmios e reconhecimento nacional.',
      src: 'https://cdn.abrahao.com.br/base/e06/2aa/6e1/chefe-de-cozinha-e-especialistas-de-restaurante.jpg',
      alt: 'Foto do Chef Roberto',
    },
  ],
};

export function About() {
  return (
    <section
      id="about"
      className="w-screen scroll-mt-[5rem] bg-yellow-50 py-16 text-amber-900 md:py-10"
    >
      <div className="mx-auto max-w-7xl space-y-24 px-10 md:px-20">
        <AboutSection title={data.aboutSections[0].title}>
          {data.aboutSections[0].content}
        </AboutSection>

        <AboutSection
          title={data.aboutSections[1].title}
          src={data.aboutSections[1].src}
          alt={data.aboutSections[1].alt}
          className="lg:flex-row"
        >
          {data.aboutSections[1].content}
        </AboutSection>

        <AboutSection
          title={data.aboutSections[2].title}
          src={data.aboutSections[2].src}
          alt={data.aboutSections[2].alt}
          className="lg:flex-row-reverse"
        >
          {data.aboutSections[2].content}
        </AboutSection>
      </div>
    </section>
  );
}
