import React, { useState } from 'react';

const GraySquareButton: React.FC = () => {
  const [showSquare, setShowSquare] = useState(false);

  const handleClick = () => {
    setShowSquare(!showSquare);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-gray-500 text-white font-semibold px-4 py-2 rounded focus:outline-none"
      >
        Click me
      </button>
      {showSquare && (
        <div className="w-8 h-8 bg-gray-500 mt-4"></div>
      )}
    </div>
  )
}

export default GraySquareButton;
