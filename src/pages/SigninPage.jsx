import { login } from 'api/auth';
import { useAuth } from 'context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// sieun1231
const SigninPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ id, password });
      setUser(response.data); // 로그인 성공 후 사용자 정보 업데이트
      alert('로그인이 완료되었습니다!');
      navigate('/');
    } catch (error) {
      const message = error.response.data.message;
      console.error(message);
      setError(message);
    }
  };

  return (
    <div>
      <h2>로그인을 해주세요.</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력해주세요. (4~10글자)"
            minLength={4}
            maxLength={10}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요. (4~15글자)"
            minLength={4}
            maxLength={15}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SigninPage;
