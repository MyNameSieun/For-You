import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

authAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('에러가 발생하였습니다. 문의해주세요.', error);
    return Promise.reject({ state: 'ERROR', message: error.message });
  }
);

// 회원가입
export const register = async (data) => {
  return await authAxios.post(`/register`, data);
};

// 로그인
export const login = async (data) => {
  const response = await authAxios.post(`/login`, data);
  const token = response.data.token;
  localStorage.setItem('authToken', token);
  return response;
};

// 회원정보 확인
export const getUser = async (data) => {
  return await authAxios.get(`/user`, data);
};

// 프로필 변경
export const newProfile = async (data) => {};
