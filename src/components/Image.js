/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="alt" />
      { heartIcon }
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
