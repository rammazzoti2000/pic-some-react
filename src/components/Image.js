/* eslint-disable */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '../context/Context'

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  // const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} />
  function heartIcon() {
    if (img.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
}

  const cartIcon = hovered && <i className="ri-add-circle-line cart" />

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="alt" />
      { heartIcon() }
      { cartIcon }
    </div>
  );
}

Image.defaultProps = {
  className: 'string',
};

Image.propTypes = {
  img: PropTypes.shape().isRequired,
  className: PropTypes.string,
};

export default Image;
