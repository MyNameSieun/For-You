import { deleteLetter, updateLetter } from 'api/letters';
import { useModal } from 'context/ModalContext';
import { useState } from 'react';
import styled from 'styled-components';

export const LetterCardModal = ({ letter, newLetterCardList }) => {
  const { closeModal } = useModal();
  const [editMode, setEditMode] = useState(null);

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
      await updateLetter(letterId, { title: editMode.title, content: editMode.content });
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
          <button onClick={closeModal}>x</button>
          {editMode ? (
            <>
              <input value={editMode.title} onChange={(e) => setEditMode({ ...editMode, title: e.target.value })} />
              <textarea
                value={editMode.content}
                onChange={(e) => setEditMode({ ...editMode, content: e.target.value })}
              />
              <button onClick={() => setEditMode(null)}>취소</button>
              <button onClick={() => handleEditButton(letter.id)}>수정 완료</button>
            </>
          ) : (
            <>
              <p>{letter.title}</p>
              <p>{letter.content}</p>
              <p>{letter.createdAt}</p>

              <button onClick={handleDeleteButton}>삭제</button>
              <button onClick={() => handleEditMode(letter)}>수정</button>
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
  border: 2px solid black;
  width: 300px;
  height: 100px;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;
