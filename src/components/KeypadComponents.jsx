import React from 'react';

export const KeypadComponents = ({ onNumberClick }) => {
  return (
    <div className='flex items-stretch text-white text-2xl mt-2'>
      <div className='grid grid-cols-4 gap-4'>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(7)}
        >
          7
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(8)}
        >
          8
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(9)}
        >
          9
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick('+')}
        >
          +
        </button>
        {/* -------------------------------------------------- */}

        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(4)}
        >
          4
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(5)}
        >
          5
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(6)}
        >
          6
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick()}
        >
          -
        </button>

        {/* -------------------------------------------------- */}

        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(1)}
        >
          1
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(2)}
        >
          2
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(3)}
        >
          3
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick()}
        >
          *
        </button>

        {/* -------------------------------------------------- */}

        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick(0)}
        >
          0
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-950 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick()}
        >
          C
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick()}
        >
          =
        </button>
        <button
          className='size-20 rounded-lg bg-indigo-600 shadow-lg border-2 border-indigo-100 hover:border-2 hover:border-indigo-300'
          onClick={() => onNumberClick()}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default KeypadComponents;
