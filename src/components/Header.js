import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

function Header() {
  const { cartItems } = useContext(Context);
  // console.log(cartItems)

  const fullCart = cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line';

  return (
    <header>
      <Link to="/"><h2>Pic Some</h2></Link>
      <Link to="/cart"><i className={`${fullCart} ri-fw ri-2x`} /></Link>
    </header>
  );
}

export default Header;
