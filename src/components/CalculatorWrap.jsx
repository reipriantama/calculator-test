import React, { useState } from 'react';
import { KeypadComponents } from './KeypadComponents';
import CalculatorScreen from './CalculatorScreen';

const CalculatorWrap = () => {
  const [number, setNumber] = useState(null);

  function handleSetNumber(inputNumber) {
    setNumber(inputNumber);
  }
  return (
    <div className='flex justify-center '>
      <div className='text-white p-3 rounded-2xl shadow-xl bg-indigo-300 border-4 border-indigo-200'>
        Calculator
        <CalculatorScreen number={number} />
        <KeypadComponents onNumberClick={handleSetNumber} />
      </div>
    </div>
  );
};

export default CalculatorWrap;
