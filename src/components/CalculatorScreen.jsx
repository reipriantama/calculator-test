import React from 'react';

const CalculatorScreen = ({ number }) => {
  return (
    <div className='mt-5 p-2 justify-end h-20 border-2 shadow-lg border-indigo-400 grid content-center rounded'>
      <div className='text-2xl'> {number} </div>
    </div>
  );
};

export default CalculatorScreen;
