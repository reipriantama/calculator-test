import React from "react";

export const KeypadComponents = ({
  onNumberClick,
  onResetClick,
  onEqualClick,
}) => {
  return (
    <div className="flex items-stretch mt-2 text-2xl text-white">
      <div className="grid grid-cols-4 gap-4">
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(7)}
        >
          7
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(8)}
        >
          8
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(9)}
        >
          9
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick("+")}
        >
          +
        </button>
        {/* -------------------------------------------------- */}

        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(4)}
        >
          4
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(5)}
        >
          5
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(6)}
        >
          6
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick("-")}
        >
          -
        </button>

        {/* -------------------------------------------------- */}

        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(1)}
        >
          1
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(2)}
        >
          2
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(3)}
        >
          3
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick("*")}
        >
          *
        </button>

        {/* -------------------------------------------------- */}

        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick(0)}
        >
          0
        </button>
        <button
          className="border-2 border-indigo-100 rounded-lg shadow-lg size-20 bg-indigo-950 hover:border-2 hover:border-indigo-300"
          onClick={() => onResetClick()}
        >
          C
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onEqualClick()}
        >
          =
        </button>
        <button
          className="bg-indigo-600 border-2 border-indigo-100 rounded-lg shadow-lg size-20 hover:border-2 hover:border-indigo-300"
          onClick={() => onNumberClick("/")}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default KeypadComponents;
