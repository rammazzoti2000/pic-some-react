import { Link } from 'react-router';
import { useStore } from '@/features/store/hooks/use-store';
import './header.scss';

export const Header = () => {
  const { cartItems } = useStore();

  const fullCart = cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line';

  return (
    <header>
      <Link to="/"><h2>Pic Some</h2></Link>
      <Link to="/cart"><i className={`${fullCart} ri-fw ri-2x`} /></Link>
    </header>
  );
};
