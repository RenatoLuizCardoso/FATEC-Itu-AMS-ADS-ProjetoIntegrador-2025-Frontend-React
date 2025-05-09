import { CarouselSlideNavigation } from './carouselSlideNavigation';

export function Carousel() {
  const slides = [
    {
      id: 'item1',
      img: 'https://images3.alphacoders.com/133/thumb-1920-1330428.png',
      alt: 'img1',
      prev: 'item4',
      next: 'item2',
    },
    {
      id: 'item2',
      img: 'https://images8.alphacoders.com/134/thumb-1920-1342857.png',
      alt: 'img2',
      prev: 'item1',
      next: 'item3',
    },
    {
      id: 'item3',
      img: 'https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1746739260~exp=1746742860~hmac=60a58b7d2ba7c481057e0ee492f99b190ce82be0397d055459517c0087205b3c&w=826',
      alt: 'img3',
      prev: 'item2',
      next: 'item4',
    },
    {
      id: 'item4',
      img: 'https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?t=st=1746739259~exp=1746742859~hmac=778ac6103230dd473b901097879cce87d1995314def8dfb7c5a2ea0c7c77cb5b&w=900',
      alt: 'img4',
      prev: 'item3',
      next: 'item1',
    },
  ];

  const scrollToSlide = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <section className="w-screen flex py-8 text-amber-900 bg-amber-50">
      <div className="mx-auto px-12 md:px-12">
        <div className="carousel h-50 max-w-6xl md:max-w-6xl md:h-135 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
          {slides.map((slide) => (
            <div
              key={slide.id}
              id={slide.id}
              className="carousel-item w-full relative scroll-mt-24"
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full object-cover"
              />
              <CarouselSlideNavigation
                prevSlideId={slide.prev}
                nextSlideId={slide.next}
              />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center gap-2 py-4">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="w-3 h-3 rounded-full bg-amber-900 hover:bg-amber-700 transition-colors duration-300 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
