import React, {  useState, useContext, createContext } from 'react';

// 1. Create the Signal
const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);
  const reset=()=>setCount(0);

  return (
    <CounterContext.Provider value={{ count, add, subtract,reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);