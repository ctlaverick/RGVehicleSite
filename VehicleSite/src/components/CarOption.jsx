import React from 'react';

const CarOption = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center w-1/5 p-2 border border-gray-300 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="object-cover border-b-2 border-gray-300 rounded-md"
      />
      <div className="flex justify-between items-center w-full p-2">
        <span className="text-sm text-gray-700">{name}</span>
        <button className="bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600">
          Select
        </button>
      </div>
    </div>
  );
};

export default CarOption;