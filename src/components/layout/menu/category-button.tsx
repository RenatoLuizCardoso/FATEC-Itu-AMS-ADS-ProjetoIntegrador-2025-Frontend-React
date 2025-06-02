import { forwardRef } from 'react';

type CategoryButtonProps = {
  category: string;
  isSelected: boolean;
  onClick: () => void;
};

export const CategoryButton = forwardRef<
  HTMLButtonElement,
  CategoryButtonProps
>(({ category, isSelected, onClick }, ref) => (
  <button
    ref={ref}
    type="button"
    onClick={onClick}
    className={`mr-4 whitespace-nowrap rounded-full px-5 py-2 transition-all duration-300 ${
      isSelected
        ? 'bg-amber-900 font-semibold text-white'
        : 'bg-white text-gray-800 hover:bg-gray-100'
    }`}
  >
    {category}
  </button>
));
