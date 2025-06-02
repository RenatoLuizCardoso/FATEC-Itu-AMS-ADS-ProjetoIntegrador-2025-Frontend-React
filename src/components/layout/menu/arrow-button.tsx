import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
}) => {
  const isLeft = direction === 'left';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`z-10 flex-shrink-0 bg-gradient-to-r ${
        isLeft
          ? 'from-neutral-light to-transparent px-1'
          : 'from-neutral-light to-transparent px-2'
      } py-4`}
    >
      {isLeft ? (
        <CaretLeftIcon size={20} className="text-gray-500" />
      ) : (
        <CaretRightIcon size={20} className="text-gray-500" />
      )}
    </button>
  );
};
