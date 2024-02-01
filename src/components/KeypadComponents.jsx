import React from 'react';

export const KeypadComponents = ({
  onNumberClick,
  onResetClick,
  onResultClick,
}) => {
  const btnValues = [
    7, 8, 9, '+',
    4, 5, 6, '-',
    1, 2, 3, '*',
    0, 'C', '=', '/',
  ];
  return (
    <div className='flex items-stretch mt-2 text-2xl text-white'>
      <div className='grid grid-cols-4 gap-4'>
        {btnValues.map((btnValues, data) => (
          <button
            key={data}
            className={`${
              btnValues === 'C' ? 'bg-indigo-900' : 'bg-indigo-600'
            } border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300`}
            onClick={() => {
              if (btnValues === 'C') {
                onResetClick();
              } else if (btnValues === '=') {
                onResultClick();
              } else {
                onNumberClick(btnValues);
              }
            }}
          >
            {btnValues}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeypadComponents;
