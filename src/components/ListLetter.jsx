import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; //import
import UserImage from "components/common/UserImage";

const ListLetterContainer = styled.div`
  height: 420px;
  width: 1160px;
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
  height: 65px;
  margin: 30px 30px 0 30px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const NickName = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
const CreatedAt = styled.div`
  font-size: 13px;
  color: #bebebe;
  margin-left: 10px;
  margin-top: 4px;
`;
const Content = styled.div`
  font-size: 16px;
  color: #7b7b7b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 11px;
  width: 1000px;
`;
const Hr = styled.hr`
  margin-top: 16px;
  height: 0.1px;
  background-color: #cccccc;
  border: 0px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

function ListLetter({ activePeople, letters }) {
  const navigate = useNavigate();
  return (
    <ListLetterContainer>
      {letters
        .filter(function (letter) {
          return letter.writedTo === activePeople;
        })
        .map(function (letter) {
          return (
            <LetterCard key={letter.id}>
              <UserInfo onClick={() => navigate(`/detail/${letter.id}`)}>
                <UserImage src={letter.avatar} />
                <div>
                  <FlexRow>
                    <NickName>{letter.nickname}</NickName>
                    <CreatedAt>{letter.createdAt}</CreatedAt>
                  </FlexRow>
                  <Content>{letter.content}</Content>
                </div>
              </UserInfo>
              <Hr />
            </LetterCard>
          );
        })}
    </ListLetterContainer>
  );
}

export default ListLetter;
