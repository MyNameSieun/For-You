import { createLetter } from 'api/letters';
import { useState } from 'react';
import styled from 'styled-components';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 편지 작성
      await createLetter({ title, content });
      alert('편지 작성이 완료되었습니다.');
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
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">내용: </label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
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
