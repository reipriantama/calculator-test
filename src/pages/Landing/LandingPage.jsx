import React from 'react';
import CalculatorWrap from '../../components/CalculatorWrap';

const LandingPage = () => {
  return (
    <div>
      <h1 className='flex justify-center m-8 text-4xl uppercase'>
        Calculator Simple
      </h1>
      <CalculatorWrap />
    </div>
  );
};

export default LandingPage;
