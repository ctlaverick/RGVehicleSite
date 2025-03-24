import React from 'react';
import '../index.css';

// Importing images dynamically
const images = require.context('../images/cars', false, /\.(jpg|jpeg|png)$/);
const imagelist = images.keys().map(image => images(image));

const CarOption = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {imagelist.map((image, index) => (
        <div key={index} className="flex justify-center items-center w-1/5 p-2">
          <img
            src={image.default || image}
            alt={`car-${index}`}
            className="h-45 w-45 rounded-lg border-2 border-gray-300"
          />
        </div>
      ))}
    </div>
  );
};

export default CarOption;
