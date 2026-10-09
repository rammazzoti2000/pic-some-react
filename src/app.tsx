import { Route, Routes } from 'react-router';
import { Header } from '@/features/header/header';
import { Photos } from '@/features/photos/photos';
import { Cart } from '@/features/cart/cart';

export const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Photos />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>
);
