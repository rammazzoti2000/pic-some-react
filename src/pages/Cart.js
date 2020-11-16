import React, { useContext } from 'react';
import { Context } from '../context/Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems } = useContext(Context);

  const totalCost = (cartItems.length * 5.99).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

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
        <button type="button">Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
