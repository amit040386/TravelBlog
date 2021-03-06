import React, { useState, Children, useEffect } from 'react';
import PropTypes from 'prop-types';

import './carousel.scss';

const Carousel = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ANIMATION_INTERVAL = 5000; // in milliseconds

  useEffect(() => {
    const timeout = setTimeout(() => {
      let nextIndex = currentIndex;

      if (currentIndex < children.length - 1) {
        nextIndex += 1;
      } else {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
    }, ANIMATION_INTERVAL);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={`${className} carousel-container`}>
      <div className="item-container">
        {
          Children.map(children, (item, index) => (
            <div className={`carousel-item ${currentIndex === index ? 'active' : ''}`} key={`carousel-${index.toString()}`}>
              {item}
            </div>
          ))
        }
      </div>
      <div className="carousel-footer">
        {
          Children.map(children, (item, index) => (
            <span className={`active-indicator ${currentIndex === index ? 'active' : ''}`} />
          ))
        }
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string
};

Carousel.defaultProps = {
  className: ''
};

export default Carousel;
