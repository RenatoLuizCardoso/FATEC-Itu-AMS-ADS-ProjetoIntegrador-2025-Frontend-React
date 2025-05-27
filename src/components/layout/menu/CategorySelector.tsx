// components/CategorySelector.tsx
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { useRef } from 'react';

type CategorySelectorProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="flex w-full items-center justify-center bg-gray-500">
      <button
        type="button"
        onClick={() => scroll('left')}
        className="z-10 flex-shrink-0 bg-gradient-to-r from-neutral-light to-transparent px-2 py-4"
      >
        <CaretLeftIcon size={20} className="text-gray-500" />
      </button>
      <div
        ref={containerRef}
        className="hide-scrollbar flex items-center space-x-2 overflow-x-auto scroll-smooth px-4 py-2"
      >
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onSelect(category)}
            className={`mr-4 whitespace-nowrap rounded-full px-4 py-3 transition-colors ${
              selected === category
                ? 'bg-amber-900 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }
          `}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => scroll('right')}
        className="z-10 flex-shrink-0 bg-gradient-to-r from-neutral-light to-transparent px-2 py-4"
      >
        <CaretRightIcon size={20} className="text-gray-500" />
      </button>{' '}
    </section>
  );
};
