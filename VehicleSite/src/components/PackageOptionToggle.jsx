import React from 'react';

const options = ['Weekly', 'Monthly', 'Yearly'];

export default function PackageOptionToggle({ selected, onSelect }) {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      {options.map(option => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`px-4 py-1 rounded-lg shadow-md ${
            selected === option
              ? 'bg-primary text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}