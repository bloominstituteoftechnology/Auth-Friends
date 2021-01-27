import React from 'react';

import { Link } from 'react-router-dom';

import { authLogOut } from '../../auth/AuthLogOut';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import './Header.scss';

const Header = () => {
  const logout = () => {
    authLogOut()
      .post('/login')
      .then(res => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container className='header-container'>
      <Box className='link-box'>
        <Link to='/'>FRIENDS</Link>
        <Link to='/logout' onClick={logout}>
          LOGOUT
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
