import React, { useState } from 'react';
import { KeypadComponents } from './KeypadComponents';
import CalculatorScreen from './CalculatorScreen';

const CalculatorWrap = () => {
  const [number, setNumber] = useState('');

  const handleSetNumber = (inputNumber) => {
    setNumber((prevNumber) => prevNumber + inputNumber);
  };

  const handleReset = () => {
    setNumber('');
  };

  const handleEquals = () => {
    try {
      const calculatedResult = eval(number);
      setNumber(calculatedResult);
      setTimeout(() => {
        setNumber('');
      }, 5000);
    } catch (error) {
      setNumber('Error');
      setTimeout(() => {
        setNumber('');
      }, 2000);
    }
  };

  return (
    <div className='flex justify-center '>
      <div className='p-3 text-white bg-indigo-300 border-4 border-indigo-100 shadow-xl rounded-2xl'>
        <h1 className='flex justify-center text-lg font-bold uppercase'>
          Calculator
        </h1>
        <CalculatorScreen number={number} />
        <KeypadComponents
          onNumberClick={handleSetNumber}
          onResetClick={handleReset}
          onResultClick={handleEquals}
        />
      </div>
    </div>
  );
};

export default CalculatorWrap;
