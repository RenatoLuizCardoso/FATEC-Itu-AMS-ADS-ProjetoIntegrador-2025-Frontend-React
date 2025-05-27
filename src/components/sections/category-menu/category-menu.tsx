type CategorySelectorProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export function CategoryMenu({
  categories,
  selected,
  onSelect,
}: CategorySelectorProps) {
  return (
    <section className="flex w-full bg-gray-50">
      <div className="scrollbar-hide m-auto flex w-[700px] items-center justify-center space-x-2.5 overflow-x-auto px-2 py-4">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onSelect(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2 transition-colors hover:bg-gray-100 ${selected === category ? 'bg-[#4b0d1d] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
