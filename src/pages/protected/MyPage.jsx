import { editProfile } from 'api/auth';
import { useAuth } from 'context/AuthContext';
import { useState } from 'react';
import styled from 'styled-components';
import defaultUser from 'assets/images/defaultUser.png';

const MyPage = () => {
  const { user, setUser } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editNickname, setEditNickname] = useState('');

  const handleNicknameChange = async () => {
    try {
      const response = await editProfile({ nickname: editNickname });
      setUser(response.data);
      alert('변경 완료!');
      setIsEditMode(null);
    } catch (error) {
      console.error();
    }
  };

  return (
    <div>
      <h2>프로필 관리</h2>
      <img src={user.avatar} />
      {isEditMode ? (
        <>
          <input value={editNickname} onChange={(e) => setEditNickname(e.target.value)} />
          <button onClick={handleNicknameChange}>변경완료</button>
          <button onClick={() => setIsEditMode(false)}>취소</button>
        </>
      ) : (
        <>
          <StMyPageFigure>
            <img src={null ?? defaultUser} alt="아바타이미지" />
          </StMyPageFigure>
          <div>{user.nickname}</div>
          <button onClick={() => setIsEditMode(true)}>닉네임 변경</button>
        </>
      )}
    </div>
  );
};

export default MyPage;
const StMyPageFigure = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
