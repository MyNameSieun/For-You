import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState(null);

  // 모달 열기
  const openModal = (id) => {
    setOpenModalId(id);
  };

  // 모달 닫기
  const closeModal = () => {
    setOpenModalId(null);
  };

  // 특정 모달이 열려 있는지 확인
  const isOpen = (id) => openModalId === id;

  return <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
