import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/Context';
import useHover from '../hooks/useHover';

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
        aria-hidden="true"
      />

      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default CartItem;
