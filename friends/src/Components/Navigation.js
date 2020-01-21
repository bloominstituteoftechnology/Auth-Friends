import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Navigation = () => {
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch({ type: 'DELETE_LOGGED_IN_USER', payload: false });
  };
  return (
    <StyledNav>
      <StyledListItem>
        <StyledListItem>
          <Link to='/'>Home</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to='/login'>Login</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to='/friends'>Friends</Link>
        </StyledListItem>
      </StyledListItem>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightblue;
  color: white;
`;

const StyledList = styled.ul`
  display: flex;
  color: white;
`;

const StyledListItem = styled.li`
  color: white;
  text-decoration: none;
  list-style: none;
  padding: 10px;
  font-size: 1.1em;
`;

const StyledButton = styled.button`
  background: darkblue;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  color: white;
`;
