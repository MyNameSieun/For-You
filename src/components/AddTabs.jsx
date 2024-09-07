import { useSelected } from 'context/SelectedContext';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

const AddTabs = () => {
  const { selected, setSelected } = useSelected();

  const characters = ['토토로', '키키', '포뇨', '치히로', '소피', '가오나시'];

  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리 파라미터 설정
  const updateSearchParams = (value) => {
    setSearchParams({ selected: value });
  };

  return (
    <div>
      <StAddTabsTitle>누구에게 보내실 건가요?</StAddTabsTitle>
      <StTabList>
        {characters.map((character, index) => (
          <StTabItem
            key={index}
            $isSelected={character === selected}
            onClick={() => {
              setSelected(character);
              updateSearchParams(character);
            }}
          >
            {character}
          </StTabItem>
        ))}
      </StTabList>
    </div>
  );
};

export default AddTabs;

const StAddTabsTitle = styled.h1`
  font-weight: bold;
  font-size: 17px;
`;

const StTabList = styled.ul`
  margin-top: 30px;
`;

const StTabItem = styled.li`
  display: flex;
  justify-content: center;

  padding: 25px;
  border-radius: 4px;
  margin: 15px 0;
  cursor: pointer;

  ${(props) =>
    props.$isSelected
      ? css`
          border: 2px solid black;
          font-weight: bold;
        `
      : css`
          border: 2px solid #bababa;
          font-weight: normal;
        `}
`;
