import React from "react";

const CalculatorScreen = ({ number, result }) => {
  return (
    <div className="grid content-center justify-end h-20 p-2 mt-5 border-2 border-indigo-400 rounded shadow-lg">
      <div className="text-2xl"> {number} </div>
    </div>
  );
};

export default CalculatorScreen;
