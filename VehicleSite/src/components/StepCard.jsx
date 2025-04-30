import React from 'react';

const StepCard = ({ step, details }) => {
  return (
    <div className="flex items-center space-x-4 g-4 p-4 rounded-lg shadow-md max-w-3xl min-w-xl transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="min-w-[80px] flex-shrink-0 flex items-center justify-center">
        <p className="aspect-square h-20 flex items-center justify-center border border-primary border-3 rounded-full text-primary font-bold text-4xl">
          {step}
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-semibold text-lg text-left">{details[0]}</p>
        <ul className="list-disc pl-4">
          {details[1].map((detail, index) => (
            <li className="text-sm text-left" key={index}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepCard;
