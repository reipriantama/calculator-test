import React from 'react';
import CalculatorWrap from '../../components/CalculatorWrap';

const LandingPage = () => {
  return (
    <div>
      <h1 className='flex justify-center uppercase m-8 text-4xl'>
        Calculator Simple
      </h1>
      <CalculatorWrap />
    </div>
  );
};

export default LandingPage;
