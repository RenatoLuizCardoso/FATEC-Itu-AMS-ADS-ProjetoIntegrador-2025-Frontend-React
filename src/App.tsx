import { Booking } from '@pages/Booking';
import { Home } from '@pages/Home';
import { LoginScreen } from '@pages/LoginScreen';
import { Menu } from '@pages/Menu';
import { NotFound } from '@pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
