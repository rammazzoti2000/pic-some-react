import { useStore } from '@/features/store/hooks/use-store';
import { CartItem } from './cart-item';
import { usePlaceOrder } from './hooks/use-place-order';
import { ITEM_PRICE } from './utils/constants';
import { formatPrice } from './utils/utils';
import './cart.scss';

export const Cart = () => {
  const { cartItems, emptyCart } = useStore();
  const { buttonText, placeOrder } = usePlaceOrder(emptyCart);

  const totalCost = formatPrice(cartItems.length * ITEM_PRICE);

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  const showOrderButton = cartItems.length > 0
    ? <button type="button" onClick={placeOrder}>{buttonText}</button>
    : <p>You have no items in your cart.</p>;

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:
        {' '}
        {totalCost}
      </p>
      <div className="order-button">
        {showOrderButton}
      </div>
    </main>
  );
};
