import styled from 'styled-components';

import { useModal } from 'context/ModalContext';
import { LetterCardModal } from './LetterCardModal';
import { useSelected } from 'context/SelectedContext';

const LetterCradList = ({ newLetterCardList, letters }) => {
  const { selected } = useSelected();
  const { isOpen, openModal } = useModal();

  return (
    <StLetterCradContainer>
      <div>
        <StLetterCradList>
          {letters
            .filter((letter) => letter.writedTo === selected)
            .map((letter) => (
              <StLetterCradItem key={letter.id} onClick={() => openModal(letter.id)}>
                <StLetterText>
                  <h2>{letter.title}</h2>
                  <h3>{letter.content}</h3>
                  <p>{letter.createdAt}</p>
                  <StLetterHr />
                </StLetterText>

                {isOpen(letter.id) && <LetterCardModal letter={letter} newLetterCardList={newLetterCardList} />}
              </StLetterCradItem>
            ))}
        </StLetterCradList>
      </div>
    </StLetterCradContainer>
  );
};

export default LetterCradList;

const StLetterCradContainer = styled.div``;

const StLetterCradList = styled.ul`
  max-height: 320px;
  overflow-y: auto;
`;

const StLetterCradItem = styled.li`
  padding: 1rem 0;
  cursor: pointer;
  margin-right: 10px;
`;

const StLetterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  & h3 {
  }

  & p {
    display: flex;
    justify-content: end;
  }
`;

const StLetterHr = styled.div`
  height: 1px;
  box-shadow: 0px 20px 0px rgb(148, 148, 148);
`;
