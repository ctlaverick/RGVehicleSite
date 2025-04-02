import React from 'react';

const CarOption = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center w-1/5 p-2 border border-gray-300">
      <img
        src={image}
        alt={name}
        className="h-15 w-15 border-b-2 border-gray-300"
      />
      <div className="flex justify-between items-center w-full p-2">
        <span className="text-sm text-gray-700">{name}</span>
        <button className="col-start-6 bg-Success text-Text py-2 px-4 rounded-lg">
          Select
        </button>
      </div>
    </div>
  );
};
  
export default CarOption;