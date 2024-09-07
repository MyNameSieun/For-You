import { register } from 'api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({ id, password, nickname });
      alert('회원가입이 완료되었습니다.');
      navigate('/sign-in');
    } catch (error) {
      const message = error.response.data.message;
      console.error(message);
      setError(message);
    }
  };

  return (
    <div>
      <h2>회원가입을 해주세요.</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input id="id" type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignupPage;
