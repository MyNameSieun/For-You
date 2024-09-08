import styled from 'styled-components';

import { useModal } from 'context/ModalContext';
import { LetterCardModal } from './LetterCardModal';
import { useSelected } from 'context/SelectedContext';
import defaultUser from 'assets/images/defaultUser.png';
import { useAuth } from 'context/AuthContext';

const LetterCradList = ({ newLetterCardList, letters }) => {
  const { selected } = useSelected();
  const { isOpen, openModal } = useModal();
  const { user } = useAuth();

  return (
    <StLetterCradContainer>
      <div>
        <StLetterCradList>
          {letters
            .filter((letter) => letter.writedTo === selected)
            .map((letter) => (
              <StLetterCradItem key={letter.id} onClick={() => openModal(letter.id)}>
                <StLetterCardAvatorFigure>
                  <img src={user.avatar ?? defaultUser} alt="아바타이미지" />
                </StLetterCardAvatorFigure>
                {console.log(user)}
                <StLetterText>
                  <h2>{letter.title}</h2>
                  <h3>{letter.content}</h3>
                  <p>{letter.createdAt}</p>
                </StLetterText>
                <StLetterHr />
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
  max-height: 340px;
  overflow-y: auto;
`;

const StLetterCradItem = styled.li`
  display: flex;
  padding: 1rem 0;
  cursor: pointer;
  margin-right: 10px;
`;

const StLetterCardAvatorFigure = styled.figure`
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

const StLetterText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 1rem;
  display: -webkit-box; /* Flexbox를 사용하여 자식 요소를 정렬 */
  -webkit-box-orient: vertical; /* 수직 방향으로 정렬 */
  -webkit-line-clamp: 3; /* 표시할 줄 수 설정 */
  overflow: hidden; /* 넘치는 내용 숨기기 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 생략부호로 표시 */
  & h2 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  & h3 {
    margin-top: 10px;
    color: #888888;
  }

  & p {
    display: flex;
    justify-content: end;
    color: #888888;
  }
`;

const StLetterHr = styled.div`
  height: 1px;
  box-shadow: 0px 20px 0px rgb(148, 148, 148);
`;
