import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideNavigationProps = {
  prevSlideId: string;
  nextSlideId: string;
};

export function SlideNavigation({
  prevSlideId,
  nextSlideId,
}: SlideNavigationProps) {
  const scrollToSlide = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button
        type="button"
        onClick={() => scrollToSlide(prevSlideId)}
        className="btn btn-circle bg-white shadow hover:bg-amber-100"
      >
        <ChevronLeft className="w-5 h-5 text-amber-900" />
      </button>
      <button
        type="button"
        onClick={() => scrollToSlide(nextSlideId)}
        className="btn btn-circle bg-white shadow hover:bg-amber-100"
      >
        <ChevronRight className="w-5 h-5 text-amber-900" />
      </button>
    </div>
  );
}
