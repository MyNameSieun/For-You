import axios from 'axios';

const lettersAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

// 편지 조회
export const getLetters = async () => {
  return await lettersAxios.get('/letters');
};

// 편지 작성
export const createLetter = async (data) => {
  return await lettersAxios.post(`/letters`, data);
};

// 편지 수정
export const updateLetter = async (id, data) => {
  return await lettersAxios.put(`/letters/${id}`, data);
};

// 편지 삭제
export const deleteLetter = async (id) => {
  return await lettersAxios.delete(`/letters/${id}`);
};
