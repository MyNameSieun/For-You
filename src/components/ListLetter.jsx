import React from "react";
import styled from "styled-components";

const ListLetterContainer = styled.div`
  height: 420px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 40px 0 0 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
`;

function ListLetter() {
  return <ListLetterContainer>닉네임</ListLetterContainer>;
}

export default ListLetter;
