import React from 'react';
import PropTypes from 'prop-types';

function Image({ className, img }) {
  return (
    <div className={`${className} image-container`}>
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
