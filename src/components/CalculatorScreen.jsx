import React from 'react';

const CalculatorScreen = ({ number }) => {
  return (
    <div>
      <div className='p-2 flex justify-end h-20 border-2 shadow-lg border-indigo-400 grid content-center rounded'>
        <div className='text-2xl'>
          {' '}
          {number} 123123123
        </div>
      </div>
    </div>
  );
};

export default CalculatorScreen;
