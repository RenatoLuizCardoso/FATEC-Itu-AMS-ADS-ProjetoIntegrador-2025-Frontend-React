import { ArrowButton, CategoryButton } from '@components/layout/menu';
import { useRef } from 'react';

type CategorySelectorProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  onSearch: (value: string) => void;
  searchValue: string;
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selected,
  onSelect,
  onSearch,
  searchValue,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="flex w-full items-center justify-center gap-5 shadow-sm">
      <ArrowButton direction="left" onClick={() => scroll('left')} />
      <div
        ref={containerRef}
        className="hide-scrollbar flex w-133 items-center space-x-3 overflow-x-auto scroll-smooth py-4"
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selected === category}
            onClick={() => onSelect(category)}
            ref={(el) => {
              buttonRefs.current[category] = el;
            }}
          />
        ))}
      </div>
      <ArrowButton direction="right" onClick={() => scroll('right')} />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar no cardápio..."
        className="h-[3rem] rounded-md border-none bg-zinc-100 pl-5 text-sm shadow-sm outline-none ring-0 transition focus:border-amber-900 focus:outline-none focus:ring-1 focus:ring-amber-900"
      />
    </section>
  );
};
