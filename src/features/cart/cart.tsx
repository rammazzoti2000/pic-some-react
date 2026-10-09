import { useStore } from '@/features/store/hooks/use-store';
import { CartItem } from '@/features/cart/cart-item';
import { usePlaceOrder } from '@/features/cart/hooks/use-place-order';
import { ITEM_PRICE } from '@/features/cart/utils/constants';
import { formatPrice } from '@/features/cart/utils/utils';
import styles from '@/features/cart/cart.module.scss';

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
    <main className={styles.cartPage}>
      <h1>Check out</h1>
      {cartItemElements}
      <p className={styles.totalCost}>
        Total:
        {' '}
        {totalCost}
      </p>
      <div className={styles.orderButton}>
        {showOrderButton}
      </div>
    </main>
  );
};
