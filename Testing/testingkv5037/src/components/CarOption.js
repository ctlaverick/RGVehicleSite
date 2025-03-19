import React from 'react';
import '../index.css';

const images = require.context('../images/cars', false, /\.(jpg|jpeg|png)$/);
const imagelist = images.keys().map(image => images(image));
const CarOption = () => {
  return (
    <div className='flex center'>
      {imagelist.map((image, index) => (
        <img
          key={index}
          src={image.default || image}
          alt={`car-${index}`}
          className="h-24 w-24"
        />
      ))}
    </div>
  );
};

export default CarOption;