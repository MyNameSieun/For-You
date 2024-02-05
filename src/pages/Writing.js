import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import SelectPeople from "components/SelectPeople";
import WritingLetter from "components/WritingLetter";
import ListLetter from "components/ListLetter";
import styled from "styled-components";
import fakeData from "fakeData.json";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const ElementBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 67%;
`;

function Writing() {
  const [activePeople, setActivePeople] = useState("권혁우 튜터님");
  const [letters, setLetters] = useState(fakeData);
  return (
    <Container>
      <Sidebar></Sidebar>
      <SelectPeople
        activePeople={activePeople}
        setActivePeople={setActivePeople}
      />
      <ElementBox>
        <WritingLetter letters={letters} setLetters={setLetters} />
        <ListLetter activePeople={activePeople} letters={letters} />
      </ElementBox>
    </Container>
  );
}

export default Writing;
