import { createContext, useContext, useEffect, useState } from 'react';

const SelectedContext = createContext(null);

export const SelectedProvider = ({ children }) => {
  // localStorage에서 초기값을 가져오거나, 없으면 기본값 '토토로' 사용
  const initialSelected = localStorage.getItem('selected') || '토토로';
  const [selected, setSelected] = useState(initialSelected);

  // `selected` 값이 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('selected', selected);
  }, [selected]);

  return <SelectedContext.Provider value={{ selected, setSelected }}>{children}</SelectedContext.Provider>;
};

export const useSelected = () => useContext(SelectedContext);
