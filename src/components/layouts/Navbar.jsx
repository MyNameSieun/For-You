import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <StNavList>
        <StNavItem to="/">For You</StNavItem>
        <div>
          <StNavItem to="sign-in" $margin>
            로그인
          </StNavItem>
          <StNavItem to="sign-up">회원가입</StNavItem>
        </div>
      </StNavList>
    </nav>
  );
};

export default Navbar;

const StNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

const StNavItem = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
  ${({ $margin }) =>
    $margin &&
    `
    margin-right: 12px; 
  `}
`;
