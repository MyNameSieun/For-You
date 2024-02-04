import React from "react";
import styled from "styled-components";

import userImage from "../assets/images/userImage.png";

const ListLetterContainer = styled.div`
  height: 524px;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0 0 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
  overflow-y: scroll;
`;
const LetterCard = styled.div`
  background-color: beige;
  height: 120px;

  margin: 30px 30px 0 30px;
`;
const UserInfo = styled.div`
  display: flex;
`;
const UserImage = styled.figure`
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const NickName = styled.span`
  font-size: 17px;
  font-weight: bold;
`;
const Date = styled.span`
  font-size: 13px;
  color: #bebebe;
`;
const Content = styled.div`
  font-size: 16px;
  color: #7b7b7b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function ListLetter({ activePeople, letters }) {
  return (
    <ListLetterContainer onClick={() => navigator(`/detail/${letters.id}`)}>
      {letters
        .filter(function (letter) {
          return letter.writedTo === activePeople;
        })
        .map(function (letter) {
          return (
            <LetterCard key={letter.id}>
              <UserInfo>
                <UserImage>
                  <img src={letter.avatar ?? userImage} alt="user image" />
                </UserImage>
                <NickName>{letter.nickname}</NickName>
                <Date>{letter.createdAt}</Date>
              </UserInfo>
              <Content>{letter.content}</Content>
              <button>수정</button>
              <button>삭제</button>
            </LetterCard>
          );
        })}
    </ListLetterContainer>
  );
}

export default ListLetter;
