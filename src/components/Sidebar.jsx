import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png";

const SidebarContainer = styled.div`
  width: 170px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
`;
const LogoImage = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const FontWeight = styled(Link)`
  font-weight: bold;
`;

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <SidebarContainer>
        <ul>
          <li>
            <LogoImage src={logo} alt="React" />
            <FontWeight to="/">For You</FontWeight>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/writing">
              <div
                onClick={() => {
                  navigate("/writing");
                }}
              >
                편지쓰러가기
              </div>
            </Link>
          </li>
        </ul>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
