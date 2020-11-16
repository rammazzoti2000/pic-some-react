import React from 'react';
import PropTypes from 'prop-types';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" />
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.element.isRequired,
};

export default CartItem;
