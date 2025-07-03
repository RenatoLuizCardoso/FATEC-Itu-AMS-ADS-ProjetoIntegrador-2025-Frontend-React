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
    <section className="w-full max-w-full px-4 py-2 md:px-8">
      <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 overflow-hidden">
        <ArrowButton direction="left" onClick={() => scroll('left')} />
        <div
          ref={containerRef}
          className="hide-scrollbar flex w-full gap-2 overflow-x-auto scroll-smooth whitespace-nowrap py-2"
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
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar no cardápio..."
        className="mt-4 w-full rounded-md bg-zinc-100 px-4 py-3 text-black text-sm shadow-sm outline-none ring-0 transition focus:ring-1 focus:ring-amber-900"
      />
    </section>
  );
};
