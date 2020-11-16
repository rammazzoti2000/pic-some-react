import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/Context';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)} aria-hidden="true" />
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default CartItem;
