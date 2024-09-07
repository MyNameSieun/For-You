import AddForm from 'components/AddForm';
import LetterCardList from 'components/LetterCardList';
import styled from 'styled-components';
import { getLetters } from 'api/letters';
import { useEffect, useState } from 'react';

const LetterCard = () => {
  const [letters, setLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 편지 가져오기
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

  // 새로운 편지 가져오기
  const newLetterCardList = async () => {
    try {
      const response = await getLetters();
      setLetters(response.data);
    } catch (error) {
      console.error();
    }
  };

  return (
    <div>
      <StAddFormBox>
        <AddForm newLetterCardList={newLetterCardList} />
      </StAddFormBox>
      <StLetterCardListBox>
        <LetterCardList letters={letters} newLetterCardList={newLetterCardList} />
      </StLetterCardListBox>
    </div>
  );
};

export default LetterCard;

const StAddFormBox = styled.div`
  background-color: #ffffff;
  flex: 1;
  padding: 20px;

  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StLetterCardListBox = styled.div`
  background-color: #ffffff;
  flex: 1;
  padding: 20px;

  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
