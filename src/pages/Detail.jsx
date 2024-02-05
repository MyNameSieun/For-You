// Detail.js
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const DetailContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
`;
const UserImage = styled.img``;
const NickName = styled.div``;
const Date = styled.div``;
const Content = styled.div``;

function Detail({ letters }) {
  const { id } = useParams();
  const { nickname, Content } = letters.find((letter) => letter.id === id);
  return (
    <Container>
      <DetailContainer>
        <UserImage></UserImage>
        <NickName>닉네임 : {nickname}</NickName>
        <NickName>{nickname}</NickName>
      </DetailContainer>
    </Container>
  );
}

export default Detail;
