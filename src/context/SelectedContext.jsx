import { createContext, useContext, useState } from 'react';

const SelectedContext = createContext(null);

export const SelectedProvider = ({ children }) => {
  const [selected, setSelected] = useState('토토로');

  return <SelectedContext.Provider value={{ selected, setSelected }}>{children}</SelectedContext.Provider>;
};

export const useSelected = () => useContext(SelectedContext);
