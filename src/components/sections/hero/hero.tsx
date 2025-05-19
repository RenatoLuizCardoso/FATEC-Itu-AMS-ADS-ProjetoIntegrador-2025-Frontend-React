import { HeroLayout } from './heroLayout';

const mockData = {
  title: 'Nome & Restaurante',
  buttons: [{ info: 'Reserva' }, { info: 'Cardápio' }],
  img: 'https://images.unsplash.com/photo-1682778418768-16081e4470a1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export function Hero() {
  return <HeroLayout {...mockData} />;
}
