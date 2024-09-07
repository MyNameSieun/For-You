import axios from 'axios';

const lettersAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

// 편지 작성
export const createLetter = async (data) => {
  return await lettersAxios.post(`/letters`, data);
};

// 편지 수정

// 편지 삭제
