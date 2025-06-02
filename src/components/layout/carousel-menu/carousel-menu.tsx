import {
  CarouselDots,
  CarouselSlide,
  CarouselSlideNavigation,
} from '@components/layout/carousel-menu';
import { useCallback, useEffect, useState } from 'react';

import { featuredDishes } from '@data/menu-data';
import { useCarouselAutoplay } from '@hooks/useCarouselAutoplay';

export function CarouselMenu() {
  const [activeSlide, setActiveSlide] = useState(featuredDishes[0].id);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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

  useCarouselAutoplay(
    currentIndex,
    featuredDishes.length,
    (index) => featuredDishes[index].id,
    scrollToSlide,
    isAutoPlay,
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAutoPlay(scrollY <= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex">
      <div className="carousel relative h-[55vh] w-full overflow-hidden md:h-[80vh]">
        {featuredDishes.map((dish) => (
          <CarouselSlide key={dish.id} {...dish} />
        ))}
      </div>

      <CarouselSlideNavigation
        prevSlideId={prev}
        nextSlideId={next}
        onNavigate={scrollToSlide}
        className="hidden sm:block"
      />

      <CarouselDots
        items={featuredDishes}
        activeSlide={activeSlide}
        scrollToSlide={scrollToSlide}
      />
    </section>
  );
}
