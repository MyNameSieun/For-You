import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png";
import homeImg from "assets/images/home.png";
import letterImg from "assets/images/letter.png";

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FlowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  &:hover {
    background-color: #343434;
    border-radius: 8px;
  }
`;
const ImageSize = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const Logo = styled.div`
  margin-top: 60px;
`;
const LogoFont = styled(Link)`
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
`;
const Home = styled(FlowCard)`
  margin-top: 83px;
`;
const Writing = styled(FlowCard)`
  margin-top: 23px;
`;
const ChileFont = styled(Link)`
  font-size: 18px;
`;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      <SidebarContainer>
        <Logo>
          <ImageSize src={logo} alt="React" />
          <LogoFont to="/">For You</LogoFont>
        </Logo>
        <Home>
          <ImageSize src={homeImg} alt="homeImage" />
          <ChileFont to="/">Home</ChileFont>
        </Home>
        <Writing>
          <ImageSize src={letterImg} alt="letterImage" />
          <ChileFont to="/writing">
            <span
              onClick={() => {
                navigate("/writing");
              }}
            >
              편지쓰기
            </span>
          </ChileFont>
        </Writing>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
