import { useAuth } from 'context/AuthContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const { isSignIn, setUser } = useAuth();

  // 로그아웃
  const hanldeLogout = async () => {
    try {
      const logoutConfirm = window.confirm('정말 로그아웃 하시겠습니까?');
      if (logoutConfirm) {
        await localStorage.removeItem('authToken');
        alert('로그아웃 되었습니다.');
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <StNavList>
        <StNavItem to="/">For You</StNavItem>
        <div>
          {isSignIn ? (
            <StNavRight>
              <StNavItem to="my-page" $margin>
                내 프로필
              </StNavItem>
              <StLogout onClick={hanldeLogout}>로그아웃</StLogout>
            </StNavRight>
          ) : (
            <>
              <StNavItem to="sign-in" $margin>
                로그인
              </StNavItem>
              <StNavItem to="sign-up">회원가입</StNavItem>
            </>
          )}
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
const StLogout = styled.div`
  cursor: pointer;
`;

const StNavRight = styled.div`
  display: flex;
`;
