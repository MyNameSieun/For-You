import { editProfile } from 'api/auth';
import { useAuth } from 'context/AuthContext';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import defaultUser from 'assets/images/defaultUser.png';

const MyPage = () => {
  const { user, setUser } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editNickname, setEditNickname] = useState(user.nickname || ''); // 편집할 닉네임 상태
  const [imgFile, setImgFile] = useState(null); // 선택한 이미지 파일
  const [previewUrl, setPreviewUrl] = useState(''); // 이미지 미리보기 URL

  // 편집 모드가 아닐 때 원래 닉네임과 이미지를 설정
  useEffect(() => {
    setEditNickname(user.nickname || '');
    setPreviewUrl(user.avatar ? user.avatar : defaultUser);
  }, [user]);

  // 파일 선택 시 호출되는 함수
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // if (imgFile.size > 1024 * 1024) {
    //   return alert('최대 1MB까지 업로드 가능합니다.');
    // }

    setImgFile(file); // 선택한 파일 저장

    //  미리보기 URL 생성(File -> Url 형식으로 변환)
    const imgUrl = URL.createObjectURL(file);
    setPreviewUrl(imgUrl);
  };

  // 프로필 변경 처리 함수
  const handleProfileChange = async () => {
    try {
      const response = await editProfile({
        nickname: editNickname,
        avatar: imgFile
      });
      setUser(response.data);
      alert('변경 완료!');
      setIsEditMode(false);
    } catch (error) {
      console.error('프로필 변경 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <h2>프로필 관리</h2>

      {isEditMode ? (
        <>
          <StMyPageFigure>
            <img src={previewUrl} alt="아바타 이미지" />
          </StMyPageFigure>
          <input type="file" onChange={handleFileChange} />
          <input value={editNickname} onChange={(e) => setEditNickname(e.target.value)} placeholder="변경할 닉네임" />
          <button onClick={handleProfileChange}>변경완료</button>
          <button onClick={() => setIsEditMode(false)}>취소</button>
        </>
      ) : (
        <>
          <StMyPageFigure>
            <img src={user.avatar || defaultUser} alt="아바타 이미지" />
          </StMyPageFigure>
          <div>{user.nickname}</div>
          <button onClick={() => setIsEditMode(true)}>닉네임 및 이미지 변경</button>
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
