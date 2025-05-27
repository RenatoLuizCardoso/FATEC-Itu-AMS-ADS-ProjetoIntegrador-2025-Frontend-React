import { CarouselSlideNavigation } from '@components/sections/carousel/slide-navigation';
import { useState } from 'react';

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

  const scrollToSlide = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setActiveSlide(id);
  };

  return (
    <div className="carousel relative h-[280px] w-full md:h-[400px]">
      {featuredDishes.map(({ id, image, name, description }, index) => {
        const prev =
          featuredDishes[
            (index - 1 + featuredDishes.length) % featuredDishes.length
          ].id;
        const next = featuredDishes[(index + 1) % featuredDishes.length].id;
        return (
          <article
            key={id}
            id={id}
            className="carousel-item relative h-full min-w-full"
          >
            <div className="absolute inset-0 bg-black/10" />
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
            <header className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h1 className="font-cursive font-semibold text-2xl">{name}</h1>
              <p className="text-sm opacity-90">{description}</p>
            </header>
            <CarouselSlideNavigation
              prevSlideId={prev}
              nextSlideId={next}
              onNavigate={scrollToSlide}
            />
          </article>
        );
      })}
      <div className="absolute bottom-0 flex w-full justify-center gap-2 py-5">
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
    </div>
  );
}
