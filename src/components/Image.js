/* eslint-disable
  consistent-return,
  jsx-a11y/control-has-associated-label,
  jsx-a11y/interactive-supports-focus,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions
*/

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '../context/Context';
import useHover from '../hooks/useHover';

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const {
    toggleFavorite, addToCart, cartItems, removeFromCart,
  } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} />;
    } if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} />;
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id);
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)} />;
    } if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)} />;
    }
  }

  return (
    <div
      className={`${className} image-container`}
      ref={ref}
    >
      <img src={img.url} className="image-grid" alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.defaultProps = {
  className: 'small',
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default Image;
