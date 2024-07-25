import React, { createContext, useState } from 'react';

// Create a context
const Context = createContext();

// Create a provider component
const Provider = ({ children }) => {
  const [state, setState] = useState('initial value');

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
