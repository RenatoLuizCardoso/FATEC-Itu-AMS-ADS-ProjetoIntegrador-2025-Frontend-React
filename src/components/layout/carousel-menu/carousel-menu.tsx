import { CarouselSlideNavigation } from '@components/sections/carousel/slide-navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const featuredDishes = [
  {
    id: 'slide-0',
    name: 'Gourmet Steak',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
    description: 'Premium cut with seasonal vegetables',
  },
  {
    id: 'slide-1',
    name: 'Seafood Delight',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80',
    description: 'Fresh catch of the day with lemon butter sauce',
  },
  {
    id: 'slide-2',
    name: 'Signature Pasta',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80',
    description: 'Handmade pasta with truffle cream sauce',
  },
];

export function CarouselMenu() {
  const [activeSlide, setActiveSlide] = useState(featuredDishes[0].id);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSlide = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setActiveSlide(id);
  }, []);

  const currentIndex = featuredDishes.findIndex(
    (dish) => dish.id === activeSlide,
  );

  const prev =
    featuredDishes[
      (currentIndex - 1 + featuredDishes.length) % featuredDishes.length
    ].id;
  const next = featuredDishes[(currentIndex + 1) % featuredDishes.length].id;

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        const nextIndex = (currentIndex + 1) % featuredDishes.length;
        const nextSlideId = featuredDishes[nextIndex].id;
        scrollToSlide(nextSlideId);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isAutoPlay, scrollToSlide]);

  // 👇 Lógica para pausar ou retomar autoplay ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsAutoPlay(false); // parou ao rolar pra baixo
      } else {
        setIsAutoPlay(true); // voltou ao topo, retoma
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex">
      <div className="carousel relative h-[55vh] w-full overflow-hidden md:h-[80vh]">
        {featuredDishes.map(({ id, image, name, description }) => (
          <article
            key={id}
            id={id}
            className="carousel-item relative h-full min-w-full snap-start"
          >
            <div className="absolute inset-0 bg-black/15" />
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
            <header className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <div className="p-6 py-10 md:py-5">
                <h1 className="font-cursive font-semibold text-2xl">{name}</h1>
                <p className="text-sm opacity-90">{description}</p>
              </div>
            </header>
          </article>
        ))}
      </div>

      <CarouselSlideNavigation
        prevSlideId={prev}
        nextSlideId={next}
        onNavigate={scrollToSlide}
        className="hidden sm:block"
      />

      <div className="absolute bottom-0 flex w-full justify-center gap-2 py-7">
        {featuredDishes.map(({ id }, index) => {
          const isActive = activeSlide === id;
          return (
            <button
              type="button"
              key={id}
              onClick={() => scrollToSlide(id)}
              className={`h-2 w-2 rounded-full transition-all ${
                isActive ? 'scale-125 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive}
            />
          );
        })}
      </div>
    </section>
  );
}
