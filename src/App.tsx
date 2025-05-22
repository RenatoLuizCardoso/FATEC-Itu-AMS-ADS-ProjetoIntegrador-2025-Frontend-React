import { Booking } from '@pages/Booking';
import { Home } from '@pages/Home';
import { Menu } from '@pages/Menu';
import { NotFound } from '@pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
  return (
    <div className="flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
