import styled from 'styled-components';

import { useModal } from 'context/ModalContext';
import { LetterCardModal } from './LetterCardModal';

const LetterCradList = ({ newLetterCardList, letters }) => {
  const { isOpen, openModal } = useModal();

  return (
    <StLetterCradListContainer>
      <div>
        <ul>
          {letters.map((letter) => (
            <li key={letter.id}>
              <p>{letter.title}</p>
              <button onClick={() => openModal(letter.id)}>자세히보기</button>
              {isOpen(letter.id) && <LetterCardModal letter={letter} newLetterCardList={newLetterCardList} />}
            </li>
          ))}
        </ul>
      </div>
    </StLetterCradListContainer>
  );
};

export default LetterCradList;

const StLetterCradListContainer = styled.div``;
