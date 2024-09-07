import AddTabs from 'components/AddTabs';
import LetterCard from 'components/LetterCard';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <StHomeLayout>
      <StAddTabsBox>
        <AddTabs />
      </StAddTabsBox>
      <StRight>
        <LetterCard />
      </StRight>
    </StHomeLayout>
  );
};

export default HomePage;

const StHomeLayout = styled.div`
  display: flex;
  height: 80vh;
`;

const StAddTabsBox = styled.div`
  width: 30%;
  background-color: #ffffff;
  padding: 20px;

  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StRight = styled.div`
  width: 90%;

  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
