import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WritingButton = styled.button`
  padding: 30px;
  width: 300px;
  background-color: pink;
  font-size: 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
`;

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/writing/");
  };
  return (
    <Container>
      <Sidebar></Sidebar>
      <Main>
        <Link to={`/writing/`}>
          <WritingButton onClick={handleButtonClick}>
            편지쓰러가기
          </WritingButton>
        </Link>
      </Main>
    </Container>
  );
}

export default Home;
