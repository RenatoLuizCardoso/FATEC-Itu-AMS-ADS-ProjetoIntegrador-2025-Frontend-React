export type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};

type menuItemProps = {
  menuItems: MenuItemType[];
  onSelectCategory: string;
};

export function CardItem({ menuItems, onSelectCategory }: menuItemProps) {
  return (
    <section className="grid w-full gap-8 p-8 md:grid-cols-2">
      {menuItems
        .filter(
          ({ categoryId }) =>
            categoryId === onSelectCategory || onSelectCategory === 'All',
        )
        .map(({ id, name, description, price, image }) => (
          <div
            key={id}
            className="grid w-full grid-cols-[40%_60%] rounded-2xl shadow-md/20"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-l-2xl bg-black/3" />
              <img
                className="h-45 w-full rounded-l-2xl object-cover"
                src={image}
                alt={name}
              />
            </div>

            <header className="relative flex flex-col gap-1 p-5">
              <h1 className="font-semibold text-black text-xl">{name}</h1>
              <p className="text-gray-500">{description}</p>
              <span className="absolute right-0 bottom-0 p-4 font-bold text-amber-900 text-xl">
                ${price}
              </span>
            </header>
          </div>
        ))}
    </section>
  );
}
