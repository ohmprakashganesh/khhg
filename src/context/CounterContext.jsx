import React, { createContext, useState, useContext } from 'react';

// 1. Create the Signal
const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  function run (){ return 8;}

  return (
    <CounterContext.Provider value={{ count, add, subtract }}>
      {children}
    </CounterContext.Provider>
  );
};
export const useCounter = () => useContext(CounterContext);