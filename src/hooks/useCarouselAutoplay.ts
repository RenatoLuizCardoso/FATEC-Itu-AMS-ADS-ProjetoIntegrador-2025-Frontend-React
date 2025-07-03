import { useEffect, useRef } from 'react';

export function useCarouselAutoplay(
  currentIndex: number,
  itemCount: number,
  getNextSlideId: (index: number) => string,
  scrollToSlide: (id: string) => void,
  isAutoPlay: boolean,
) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        const nextIndex = (currentIndex + 1) % itemCount;
        const nextSlideId = getNextSlideId(nextIndex);
        scrollToSlide(nextSlideId);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isAutoPlay, scrollToSlide, itemCount, getNextSlideId]);
}
