import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

type SlideNavigationProps = {
  prevSlideId: string;
  nextSlideId: string;
  onNavigate: (id: string) => void;
};

export function CarouselSlideNavigation({
  prevSlideId,
  nextSlideId,
  onNavigate,
}: SlideNavigationProps) {
  const commonBtnClass =
    'btn btn-circle bg-white shadow hover:bg-amber-100 transition-colors';

  return (
    <div className="-translate-y-1/2 absolute top-1/2 right-5 left-5 flex transform justify-between">
      <button
        type="button"
        onClick={() => onNavigate(prevSlideId)}
        className={commonBtnClass}
        aria-label="Previous slide"
      >
        <CaretLeftIcon size={24} className="text-amber-900" />
      </button>
      <button
        type="button"
        onClick={() => onNavigate(nextSlideId)}
        className={commonBtnClass}
        aria-label="Next slide"
      >
        <CaretRightIcon size={24} className="text-amber-900" />
      </button>
    </div>
  );
}
