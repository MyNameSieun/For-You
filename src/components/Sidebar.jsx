import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png";
import homeImg from "assets/images/home.png";
import letterImg from "assets/images/letter.png";

const SidebarContainer = styled.div`
  width: 252px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
`;
const LogoImage = styled.img`
  width: 32px;
  margin-top: 23px;
  margin-right: 10px;
`;
const HomeImg = styled.img`
  width: 30px;
  margin-top: 50px;
  margin-right: 10px;
`;
const LetterImg = styled.img`
  width: 30px;
  margin-top: 30px;
  margin-right: 10px;
`;

const LogoFont = styled(Link)`
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
`;

const ChileFont = styled(Link)`
  font-size: 18px;

  &:hover {
    color: #ffbbf6;
  }
`;
function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <SidebarContainer>
        <ul>
          <li>
            {" "}
            <LogoImage src={logo} alt="React" />
            <LogoFont to="/">For You</LogoFont>
          </li>
          <li>
            <HomeImg src={homeImg} alt="homeImage" />
            <ChileFont to="/">Home</ChileFont>
          </li>
          <li>
            <LetterImg src={letterImg} alt="letterImage" />
            <ChileFont to="/writing">
              <span
                onClick={() => {
                  navigate("/writing");
                }}
              >
                편지쓰기
              </span>
            </ChileFont>
          </li>
        </ul>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
