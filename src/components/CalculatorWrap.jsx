import React, { useState } from "react";
import { KeypadComponents } from "./KeypadComponents";
import CalculatorScreen from "./CalculatorScreen";

const CalculatorWrap = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSetNumber = (inputNumber) => {
    setNumber((prevNumber) => prevNumber + inputNumber);
  };

  const handleReset = () => {
    setNumber("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      const calculatedResult = eval(number).toString();
      setResult(calculatedResult);
      setNumber(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="p-3 border-4 border-gray-100 shadow-xl rounded-2xl">
        Calculator Wrap
        <CalculatorScreen number={number} result={result} />
        <KeypadComponents
          onNumberClick={handleSetNumber}
          onResetClick={handleReset}
          onEqualClick={handleEqual}
        />
      </div>
    </div>
  );
};

export default CalculatorWrap;
