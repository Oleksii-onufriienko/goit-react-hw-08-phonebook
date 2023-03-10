import { Suspense } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import styled from 'styled-components';

const Header = styled.header`
  padding: 12px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  padding: 10px;
  cursor: pointer;
  &.active {
    color: orange;
  }
`;

const StyledButton = styled.button`
  padding: 6px;
  height: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledTitle = styled.p`
  margin-right: 12px;
`;

export function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.user.name);

  const onLogOut = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };

  return (
    <>
      <Header>
        {isLoggedIn ? (
          <>
            <StyledButton onClick={onLogOut}>Log Out</StyledButton>
            <StyledTitle>Welcome, {name}!</StyledTitle>
          </>
        ) : (
          <>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </>
        )}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
