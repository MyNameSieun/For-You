import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 334px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;

  margin: 40px 0px 40px 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
`;

function SelectPeople() {
  return (
    <>
      <SelectContainer>
        <h2>누구에게 보내실 건가요?</h2>
      </SelectContainer>
    </>
  );
}

export default SelectPeople;
