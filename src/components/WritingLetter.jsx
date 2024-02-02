import React from "react";
import styled from "styled-components";

const WritingLetterContainer = styled.div`
  width: 1039px;
  height: 369px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 40px 0 0 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
`;

function WritingLetter() {
  return (
    <WritingLetterContainer>
      <h1>편지를 작성해주세요</h1>
    </WritingLetterContainer>
  );
}

export default WritingLetter;
