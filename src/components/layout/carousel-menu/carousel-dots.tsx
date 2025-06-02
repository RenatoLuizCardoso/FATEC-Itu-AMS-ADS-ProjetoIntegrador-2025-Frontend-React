type CarouselDotsProps = {
  items: { id: string }[];
  activeSlide: string;
  scrollToSlide: (id: string) => void;
};

export function CarouselDots({
  items,
  activeSlide,
  scrollToSlide,
}: CarouselDotsProps) {
  return (
    <div className="absolute bottom-0 flex w-full justify-center gap-2 py-7">
      {items.map(({ id }, index) => {
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
  );
}
