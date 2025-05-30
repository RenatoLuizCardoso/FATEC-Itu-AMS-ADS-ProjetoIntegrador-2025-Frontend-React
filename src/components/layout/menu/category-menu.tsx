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
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

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

  const handleSelect = (category: string) => {
    onSelect(category);
    const button = buttonRefs.current[category];
    button?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section className="flex w-full items-center justify-center px-5 shadow-sm">
      <button
        type="button"
        onClick={() => scroll('left')}
        className="z-10 flex-shrink-0 bg-gradient-to-r from-neutral-light to-transparent px-1 py-4"
      >
        <CaretLeftIcon size={20} className="text-gray-500" />
      </button>
      <div
        ref={containerRef}
        className="hide-scrollbar flex items-center space-x-2 overflow-x-auto scroll-smooth py-4"
      >
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            ref={(el) => {
              buttonRefs.current[category] = el;
            }}
            onClick={() => handleSelect(category)}
            className={`mr-4 whitespace-nowrap rounded-full px-5 py-2 transition-all duration-300 ${
              selected === category
                ? 'bg-amber-900 font-semibold text-white'
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
