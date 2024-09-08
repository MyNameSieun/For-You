import { deleteLetter, updateLetter } from 'api/letters';
import { useAuth } from 'context/AuthContext';
import { useModal } from 'context/ModalContext';
import { useState } from 'react';
import styled from 'styled-components';
import defaultUser from 'assets/images/defaultUser.png';

export const LetterCardModal = ({ letter, newLetterCardList }) => {
  const { closeModal } = useModal();
  const [editMode, setEditMode] = useState(null);
  const { user } = useAuth();

  // 편지 삭제
  const handleDeleteButton = async () => {
    try {
      const deleteConfirm = window.confirm('정말 삭제하시겠습니까?');
      if (deleteConfirm) {
        await deleteLetter(letter.id);
        alert('삭제가 완료되었습니다.');
        closeModal();
        newLetterCardList();
      }
    } catch (error) {
      console.error(error);
    }
  };
  // 편지 수정 모드
  const handleEditMode = (letter) => {
    setEditMode(letter);
  };

  // 편지 수정
  const handleEditButton = async (letterId) => {
    try {
      await updateLetter(letterId, {
        title: editMode.title,
        content: editMode.content,
        avator: editMode.avator,
        writedTo: editMode.writedTo,
        createdAt: editMode.createdAt
      });
      alert('수정이 완료되었습니다!');
      setEditMode(null);
      newLetterCardList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <StOverlay onClick={closeModal}>
        <StModalBox onClick={(e) => e.stopPropagation()}>
          <StModalClose onClick={closeModal}>x</StModalClose>
          {editMode ? (
            <>
              <StModalText>
                <StInput value={editMode.title} onChange={(e) => setEditMode({ ...editMode, title: e.target.value })} />
                <StTextarea
                  value={editMode.content}
                  onChange={(e) => setEditMode({ ...editMode, content: e.target.value })}
                />
              </StModalText>
              <StModalButtonBox>
                <StModalButton onClick={() => setEditMode(null)} $buttonColor>
                  취소
                </StModalButton>
                <StModalButton onClick={() => handleEditButton(letter.id)}>수정 완료</StModalButton>
              </StModalButtonBox>
            </>
          ) : (
            <>
              <StModalTop>
                <StModalAvatorFigure>
                  <img src={user.avatar ?? defaultUser} alt="아바타이미지" />
                </StModalAvatorFigure>
                <StModalTitle>{letter.title}</StModalTitle>
              </StModalTop>

              <StModalHr />
              <StModalContent>{letter.content}</StModalContent>
              <StModalText>
                <p>작성자: {letter.nickname}</p>
                <p>{letter.createdAt}</p>
              </StModalText>

              <StModalButtonBox>
                {user && user.id === letter.userId && (
                  <>
                    <StModalButton onClick={handleDeleteButton} $buttonColor>
                      삭제
                    </StModalButton>
                    <StModalButton onClick={() => handleEditMode(letter)}>수정</StModalButton>
                  </>
                )}
              </StModalButtonBox>
            </>
          )}
        </StModalBox>
      </StOverlay>
    </div>
  );
};
const StOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.096);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 30rem;
  height: 20rem;
  border-radius: 12px;

  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;
const StModalClose = styled.div`
  display: flex;
  justify-content: end;

  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
`;

const StModalTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const StModalText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 24px;
  color: #5e5e5e;
`;

// 수정 클릭
const StInput = styled.input`
  font-weight: bold;
  font-size: 0.9rem;
  width: 100%;
  padding: 10px;
  margin: 6px 0 20px 0;
`;

const StTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  height: 8rem;
  resize: none;
`;

// 수정 미클릭
const StModalTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
`;

const StModalContent = styled.p`
  padding: 1rem 0;
  margin-top: 30px;
`;

// hr
const StModalHr = styled.div`
  height: 1px;
  box-shadow: 0px 20px 0px rgb(148, 148, 148);
  position: absolute;
  left: 0;
  right: 0;
  top: 6rem;
  margin: 0 1rem;
`;

// 버튼
const StModalButtonBox = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  gap: 4px;
`;

const StModalButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: ${(props) => (props.$buttonColor ? '#4A90E2 ' : '#6C757D ')};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  &:hover {
    background-color: ${(props) => (props.$buttonColor ? '#357ABD ' : '#5a6268  ')};
  }
`;

// 이미지

const StModalAvatorFigure = styled.figure`
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
