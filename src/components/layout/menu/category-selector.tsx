import { ArrowButton, CategoryButton } from '@components/layout/menu';
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
      <ArrowButton direction="left" onClick={() => scroll('left')} />
      <div
        ref={containerRef}
        className="hide-scrollbar flex items-center space-x-2 overflow-x-auto scroll-smooth py-4"
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selected === category}
            onClick={() => handleSelect(category)}
            ref={(el) => {
              buttonRefs.current[category] = el;
            }}
          />
        ))}
      </div>
      <ArrowButton direction="right" onClick={() => scroll('right')} />
    </section>
  );
};
