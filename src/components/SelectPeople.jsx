import React, { useState } from "react";
import styled, { css } from "styled-components"; // import(retrun에 css치고 tap누르면 자동 import)

const SelectContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 40px 0px 40px 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
`;
const SelectText = styled.div`
  font-size: 18px;
  margin: 30px 0 0 30px;
  font-weight: bold;
`;
const SelectList = styled.div`
  ${(props) => {
    if (props.$activePeople === props.children) {
      return css`
        border: 3px solid #000000;
        font-weight: bold;
      `;
    }
    return css`
      border: 3px solid #bababa;
      font-weight: normal;
    `;
  }}

  margin: 30px 40px -10px 40px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

function SelectPeople({ activePeople, setActivePeople }) {
  const handleActivePeople = (e) => {
    if (e.target === e.currentTarget) return;
    setActivePeople(e.target.textContent);
  };
  return (
    // onClick함수 등록
    <SelectContainer onClick={handleActivePeople}>
      <SelectText>누구에게 보내실 건가요?</SelectText>
      <SelectList $activePeople={activePeople}>권혁우 튜터님</SelectList>
      <SelectList $activePeople={activePeople}>김병연 튜터님</SelectList>
      <SelectList $activePeople={activePeople}>박가현 튜터님</SelectList>
      <SelectList $activePeople={activePeople}>최원장 튜터님</SelectList>
      <SelectList $activePeople={activePeople}>윤창식 튜터님</SelectList>
      <SelectList $activePeople={activePeople}>이재상 튜터님</SelectList>
    </SelectContainer>
  );
}

export default SelectPeople;
