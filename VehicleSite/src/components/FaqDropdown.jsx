import React, { useState } from 'react';

const FaqDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <button
        onClick={toggleAnswer}
        className="w-full text-left text-lg font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-300 focus:outline-none"
      >
        {question}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700 px-4 py-2 bg-gray-100 rounded-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;
