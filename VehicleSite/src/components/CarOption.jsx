import React from 'react';
import LinkButton from './LinkButton';

const CarOption = ({ name, image, stats, variant = 'default' }) => {
  const isReccomended = variant === 'reccomended';

  return (
    <div
      className={`flex flex-col items-center w-1/5 p-2 rounded-lg shadow-md border border-gray-300
        ${isReccomended ? 'bg-secondary' : 'bg-admin-background'}
      `}
    >
      <div className="relative w-full">
        <div className="absolute top-2 left-2 flex gap-1 z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`w-4 h-4 text-[10px] flex items-center justify-center rounded-sm bg-primary text-admin-text`}
            >
              {stat}
            </div>
          ))}
        </div>
        <img
          src={image}
          alt={name}
          className="w-full object-cover border-b-2 border-gray-300 rounded-md"
        />
      </div>
      <div className="flex justify-between items-center w-full p-2">
        <span className="text-sm text-gray-700">{name}</span>
        <LinkButton text="View Vehicle" link={'#'} />
      </div>
    </div>
  );
};

export default CarOption;
