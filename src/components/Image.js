/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  console.log(hovered)
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="alt" />
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
