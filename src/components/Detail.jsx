// Detail.js
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DetailContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: black;
`;
const UserImage = styled.img`
  background-color: black;
`;
const NickName = styled.div``;
const Date = styled.div``;
const Content = styled.div``;

function Detail({ letter }) {
  const { id } = useParams();
  const { avatar, nickname, createdAt } = letter.find(
    (letter) => letter.id === id
  );
  return (
    <Container>
      <DetailContainer>
        <UserImage></UserImage>
        <NickName>{nickname}</NickName>
        <Date>{id.createdAt}</Date>
        <Content>{id.createdAt}</Content>{" "}
      </DetailContainer>
    </Container>
  );
}

export default Detail;
