import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

type SlideNavigationProps = {
  prevSlideId: string;
  nextSlideId: string;
  onNavigate: (id: string) => void;
  className?: string;
};

export function CarouselSlideNavigation({
  prevSlideId,
  nextSlideId,
  onNavigate,
  className,
}: SlideNavigationProps) {
  const commonBtnClass = `cursor-pointer bg-black/40 hover:bg-black/60 rounded-full text-white p-2 transition-colors ${className}`;

  return (
    <div className="-translate-y-1/2 absolute top-1/2 right-5 left-5 mx-6 flex transform justify-between">
      <button
        type="button"
        onClick={() => onNavigate(prevSlideId)}
        className={commonBtnClass}
        aria-label="Previous slide"
      >
        <CaretLeftIcon size={24} />
      </button>
      <button
        type="button"
        onClick={() => onNavigate(nextSlideId)}
        className={commonBtnClass}
        aria-label="Next slide"
      >
        <CaretRightIcon size={24} />
      </button>
    </div>
  );
}
