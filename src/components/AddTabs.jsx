import { useSelected } from 'context/SelectedContext';
import styled, { css } from 'styled-components';

const AddTabs = () => {
  const { selected, setSelected } = useSelected();

  const characters = ['토토로', '키키', '포뇨', '치히로', '소피', '가오나시'];

  return (
    <div>
      <h2>누구에게 보내실 건가요?</h2>
      <StTabList>
        {characters.map((character, index) => (
          <StTabItem key={index} $isSelected={character === selected} onClick={() => setSelected(character)}>
            {character}
          </StTabItem>
        ))}
      </StTabList>
    </div>
  );
};

export default AddTabs;

const StTabList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StTabItem = styled.li`
  padding: 15px;
  border-radius: 4px;
  margin: 5px 0;
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
