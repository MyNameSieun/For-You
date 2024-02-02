import React from "react";
import Sidebar from "components/Sidebar";
import SelectPeople from "components/SelectPeople";
import WritingLetter from "components/WritingLetter";
import ListLetter from "components/ListLetter";
import styled from "styled-components"; // import

const Container = styled.div`
  display: flex;
`;
const ElementBox = styled.div`
  display: flex;
  flex-direction: column;
`;

function Writing() {
  return (
    <Container>
      <Sidebar />
      <SelectPeople />
      <ElementBox>
        <WritingLetter />
        <ListLetter />
      </ElementBox>
    </Container>
  );
}

export default Writing;
