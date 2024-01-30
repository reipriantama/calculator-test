import React from 'react';

const CalculatorScreen = ({ number }) => {
  return (
    <div className='grid content-center justify-end h-20 p-2 mt-5 mb-5 text-white border-2 border-indigo-100 rounded shadow-lg'>
      <div className='text-4xl'> {number} </div>
    </div>
  );
};

export default CalculatorScreen;
