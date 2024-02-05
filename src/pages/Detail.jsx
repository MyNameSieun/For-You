// Detail.js
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserImage from "components/common/UserImage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 22px;
`;

const NickName = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
const Content = styled.div`
  color: #7b7b7b;
  width: 300px;
  margin: 13px 0 0 25px;
`;
const CreatedAt = styled.div`
  font-size: 13px;
  color: #bebebe;
  margin-left: 10px;
  margin-top: 4px;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  height: 30px;
  width: 60px;
  margin-right: 5px;
  cursor: pointer;
`;
const BackClick = styled.div`
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 24px;
  top: 9px;
`;

const EditButton = styled(Button)`
  color: #2c2c2c;
  background-color: white;
  font-weight: bold;
  position: absolute;
  right: 77px;
  bottom: 19px;
`;

const DeleteButton = styled(Button)`
  background-color: #2c2c2c;
  font-weight: bold;
  position: absolute;
  right: 14px;
  bottom: 19px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0 0 15px;
`;
const Hr = styled.hr`
  width: 90%;
  border: 0px;
  margin-top: 16px;
  height: 1px;
  background-color: #cccccc;
`;

function Detail({ letters, setLetters }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const { nickname, content, createdAt } = letters.find(
    //?
    (letter) => letter.id === id
  );

  // 삭제 기능
  const handleRemoveBtn = (id) => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
    const Letters = letters.filter((letter) => letter.id !== id);
    navigate(-1);
    setLetters(Letters);
  };

  return (
    <Container>
      <DetailContainer>
        <BackClick onClick={() => navigate(-1)}>x</BackClick>{" "}
        <FlexRow>
          <UserImage src={letters.avatar} />
          <NickName>{nickname}</NickName>
          <CreatedAt>{createdAt}</CreatedAt>
        </FlexRow>
        <Hr />
        <Content>{content}</Content>
        <EditButton>수정</EditButton>
        <DeleteButton onClick={() => handleRemoveBtn(id)}>삭제</DeleteButton>
      </DetailContainer>
    </Container>
  );
}

export default Detail;
