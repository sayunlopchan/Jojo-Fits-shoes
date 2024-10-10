import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">

      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {products.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={item.src}
              className="size-full object-cover mx-auto"
              alt={item.alt || `Slide ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 z-30 w-10 h-10 flex justify-center items-center bg-gray-300 border rounded-full transform -translate-y-1/2"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 z-30 w-10 h-10 flex justify-center items-center bg-gray-300 border rounded-full transform -translate-y-1/2"
      >
        &#10095;
      </button>
    </div>
  );
};

// Prop types for the Carousel component
Carousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, // URL of the image
      alt: PropTypes.string, // Alt text for the image (optional)
    })
  ).isRequired, // products prop is required
};

export default Carousel;
