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

// 회원가입--------------------------------------------------------------
/*Response
{
  "message": "회원가입 완료",
  "success": true
}
*/
export const register = async (data) => {
  return await authAxios.post(`/register`, data);
};

// 로그인--------------------------------------------------------------
/*Response
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2FiYyIsImlhdCI6MTcwMDgxNDQyMCwiZXhwIjoxNzAwODE4MDIwfQ.8hWOHHEzDPzumnqCU7jyoi3zFhr-HNZvC7_pzBfOeuU",
  "userId": "유저 아이디",
  "success": true,
  "avatar": "프로필 이미지",
  "nickname": "유저 닉네임"
}
*/
export const login = async (data) => {
  const response = await authAxios.post(`/login`, data);
  const token = response.data.accessToken;
  localStorage.setItem('authToken', token);
  return response;
};

// 회원정보 확인--------------------------------------------------------------
/*Response
{
  "id": "사용자 아이디",
  "nickname": "사용자 닉네임",
  "avatar": null,
  "success": true
}
*/
export const getUser = async (data) => {
  return await authAxios.get(`/user`, data);
};

// 프로필 변경--------------------------------------------------------------
/*Response
{
  "avatar": "변경된 이미지 URL",
  "nickname": "변경된 닉네임",
  "message": "프로필이 업데이트되었습니다.",
  "success": true
}
*/
export const editProfile = async (data) => {
  const formData = new FormData();
  formData.append('avatar', data.avatar);
  formData.append('nickname', data.nickname);

  return await authAxios.patch('/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
