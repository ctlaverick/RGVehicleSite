import React from 'react';

const images = require.context('../images/cars', false, /\.(jpg|jpeg|png)$/);
const imagelist = images.keys().map(image => images(image));

const CarOption = () => {
  return (
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-xl font-semibold">Recommended cars:</h1>
  <div className="flex flex-wrap justify-center gap-4">
    {imagelist.map((image, index) => (
      <div key={index} className="flex flex-col items-center w-1/4 p-2 border border-gray-300">
        <img
          src={image.default || image}
          alt={`car-${index}`}
          className="h-40 w-40 border-b-2 border-gray-300"
        />
        <div className="flex justify-between items-center w-full p-2">
          <span className="text-sm text-gray-700">Car Model</span>
          <button className="bg-Success hover:bg-Success text-Text py-2 px-4 rounded">
            Select
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default CarOption;
