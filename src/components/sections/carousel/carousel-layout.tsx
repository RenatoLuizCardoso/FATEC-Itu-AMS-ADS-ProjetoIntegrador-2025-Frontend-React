import { useState } from 'react';
import { CarouselSlideNavigation } from './slide-navigation';

type Slide = {
  id: string;
  img: string;
  alt?: string;
};

type CarouselProps = {
  slides: Slide[];
};

export function CarouselLayout({ slides }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(slides[0].id);

  const scrollToSlide = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setActiveSlide(id);
  };

  return (
    <section className="flex w-screen bg-amber-50 py-8 text-amber-900">
      <div className="mx-auto px-12 md:px-12">
        <div className="carousel h-50 max-w-6xl overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl md:h-135 md:max-w-6xl">
          {slides.map(({ id, img, alt }, index) => {
            const prev = slides[(index - 1 + slides.length) % slides.length].id;
            const next = slides[(index + 1) % slides.length].id;
            return (
              <div
                key={id}
                id={id}
                className="carousel-item relative w-full scroll-mt-24"
              >
                <img src={img} alt={alt} className="w-full object-cover" />
                <CarouselSlideNavigation
                  prevSlideId={prev}
                  nextSlideId={next}
                  onNavigate={scrollToSlide}
                />
              </div>
            );
          })}
        </div>

        <div className="flex w-full justify-center gap-2 py-4">
          {slides.map((slide, index) => {
            const isActive = activeSlide === slide.id;
            return (
              <button
                type="button"
                key={slide.id}
                onClick={() => scrollToSlide(slide.id)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 focus:outline-none ${isActive ? 'bg-amber-700' : 'bg-amber-900 hover:bg-amber-700'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
