type CarouselSlideProps = {
  id: string;
  image: string;
  name: string;
  description: string;
};

export function CarouselSlide({
  id,
  image,
  name,
  description,
}: CarouselSlideProps) {
  return (
    <article
      key={id}
      id={id}
      className="carousel-item relative h-full min-w-full snap-start"
    >
      <div className="absolute inset-0 bg-black/15" />
      <img src={image} alt={name} className="h-full w-full object-cover" />
      <header className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
        <div className="p-6 py-10 md:py-5">
          <h1 className="font-cursive font-semibold text-2xl">{name}</h1>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </header>
    </article>
  );
}
