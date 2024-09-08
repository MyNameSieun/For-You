import { createLetter } from 'api/letters';
import { useAuth } from 'context/AuthContext';
import { useSelected } from 'context/SelectedContext';
import dayjs from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const AddForm = ({ newLetterCardList }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { selected } = useSelected();
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLetter = {
      id: uuid(),
      content,
      title,
      avator: null,
      writedTo: selected,
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      nickname: user.nickname,
      userId: user.id
    };

    try {
      // 편지 작성
      await createLetter(newLetter);
      alert('편지 작성이 완료되었습니다.');
      newLetterCardList();
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StAddFormContainer>
      <StAddFormTitle>편지를 작성해주세요</StAddFormTitle>
      <StAddBox>
        <form onSubmit={handleSubmit}>
          <div>
            <StAddNickname>닉네임: {user.nickname}</StAddNickname>
            <div>
              <label htmlFor="title">제목: </label>
            </div>
            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={20} required />
          </div>
          <StAddContentBox>
            <label htmlFor="content">내용: </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={200}
              required
            />
          </StAddContentBox>
          <StAddButton>
            <button type="submit">편지 등록</button>
          </StAddButton>
        </form>
      </StAddBox>
    </StAddFormContainer>
  );
};

export default AddForm;

const StAddFormContainer = styled.div``;

const StAddFormTitle = styled.h2`
  font-weight: bold;
  font-size: 17px;
`;

const StAddBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  & input {
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
  }

  & textarea {
    resize: none;
    width: 100%;
    height: 10em;
  }
`;

const StAddNickname = styled.div`
  margin-bottom: 1rem;
`;

const StAddContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StAddButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;

  & button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:active {
      background-color: #004494;
    }
  }
`;
