import { CarouselLayout } from './carousel-layout';

const mockData = {
  slides: [
    {
      id: 'slide-0',
      img: 'https://images3.alphacoders.com/133/thumb-1920-1330428.png',
      alt: 'img1',
    },
    {
      id: 'slide-1',
      img: 'https://images8.alphacoders.com/134/thumb-1920-1342857.png',
      alt: 'img2',
    },
    {
      id: 'slide-2',
      img: 'https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg',
      alt: 'img3',
    },
    {
      id: 'slide-3',
      img: 'https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg',
      alt: 'img4',
    },
  ],
};

export function Carousel() {
  return <CarouselLayout {...mockData} />;
}
