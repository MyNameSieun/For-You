import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLetters } from 'api/letters';
import { useModal } from 'context/ModalContext';
import { LetterCardModal } from './LetterCardModal';

const LetterCradList = () => {
  const [letters, setLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, setIsOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const loadLetter = async () => {
      try {
        const response = await getLetters();
        setLetters(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLetter();
  }, []);

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  return (
    <StLetterCradListContainer>
      <div>
        <ul>
          {letters.map((letter) => (
            <li key={letter.id}>
              <p>{letter.title}</p>
              <button onClick={() => openModal(letter.id)}>자세히보기</button>
              {isOpen(letter.id) && <LetterCardModal letter={letter} />}
            </li>
          ))}
        </ul>
      </div>
    </StLetterCradListContainer>
  );
};

export default LetterCradList;

const StLetterCradListContainer = styled.div``;
