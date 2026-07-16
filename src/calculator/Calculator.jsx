import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Calculator = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => setInput((old) => old + value);

   const clearInput = () => {
    setInput("");
    setResult("");
  }
  
  const calculateResult = () => {
      setResult(eval(input).toString());
  };
  const deleteLast = () => setInput(input.slice(0, -1));

  // Utility for common button styles
  const btnClass = "p-4 text-xl font-semibold rounded-lg transition-all active:scale-95 text-white bg-zinc-700 hover:bg-zinc-600";
  const orangeBtn = "p-4 text-xl font-semibold rounded-lg transition-all active:scale-95 text-white bg-orange-500 hover:bg-orange-400";
  const grayBtn = "p-4 text-xl font-semibold rounded-lg transition-all active:scale-95 text-white bg-zinc-500 hover:bg-zinc-400";

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="w-full max-w-xs p-6 bg-black rounded-3xl shadow-2xl border border-zinc-800">
        
        {/* Display Section */}
        <div className="mb-6 text-right p-4 bg-zinc-900 rounded-xl min-h-[100px] flex flex-col justify-end">
          <div className="text-zinc-400 text-sm overflow-hidden whitespace-nowrap">
            {input || "0"}
          </div>
          <div className="text-white text-4xl font-bold truncate">
            {result || 0}
          </div>
        </div>

        {/* Keypad Section */}
        <div className="grid grid-cols-4 gap-3">

          <button onClick={clearInput} className={`${grayBtn} col-span-2`}>AC</button>
          <button onClick={deleteLast} className={grayBtn}>DEL</button>
          <button onClick={() => handleClick("/")} className={orangeBtn}>÷ </button>

          <button onClick={() => handleClick("7")} className={btnClass}>7</button>
          <button onClick={() => handleClick("8")} className={btnClass}>8</button>
          <button onClick={() => handleClick("9")} className={btnClass}>9</button>
          <button onClick={() => handleClick("*")} className={orangeBtn}>×</button>

          <button onClick={() => handleClick("4")} className={btnClass}>4</button>
          <button onClick={() => handleClick("5")} className={btnClass}>5</button>
          <button onClick={() => handleClick("6")} className={btnClass}>6</button>
          <button onClick={() => handleClick("-")} className={orangeBtn}>-</button>

          <button onClick={() => handleClick("1")} className={btnClass}>1</button>
          <button onClick={() => handleClick("2")} className={btnClass}>2</button>
          <button onClick={() => handleClick("3")} className={btnClass}>3</button>
          <button onClick={() => handleClick("+")} className={orangeBtn}>+</button>

          <button onClick={() => handleClick("0")} className={`${btnClass} col-span-2 text-left px-8`}>0</button>
          <button onClick={() => handleClick(".")} className={btnClass}>.</button>
          <button onClick={calculateResult} className={orangeBtn}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;