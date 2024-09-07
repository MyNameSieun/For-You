import { createLetter } from 'api/letters';
import { useSelected } from 'context/SelectedContext';
import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const AddForm = ({ newLetterCardList }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { selected } = useSelected();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLetter = {
      id: uuid(),
      content,
      title,
      avator: null,
      writedTo: selected,
      createdAt: new Date()
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목: </label>
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="content">내용: </label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">편지 등록</button>
      </form>
    </StAddFormContainer>
  );
};

export default AddForm;

const StAddFormContainer = styled.div``;

const StAddFormTitle = styled.h2`
  font-weight: bold;
  font-size: 17px;
`;
