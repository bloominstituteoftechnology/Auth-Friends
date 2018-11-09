import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Friends from '../components/Friends';
import CreateFriendForm from '../components/CreateFriendForm';
import UpdateFriendForm from '../components/UpdateFriendForm';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    /* border-bottom: 3px solid lightgrey; */
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 880px;
    width: 100%;
`;

const SiteName = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 66%;
`;

const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    width: 33%;
`;

const Underlined = styled(NavLink)`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #9e20d1;
    height: 2px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before, &:focus:before, &:active:before {
    left: 0;
    right: 0;
  }
`;

const App = props => {
    return (
      <div>
      <Container>
          <Route path='/create' component={CreateFriendForm} />
          <Route path='/update/:id' component={UpdateFriendForm} />

          <NavBar>
            <SiteName>
              <h1>Friends!</h1>
            </SiteName>
            <NavLinks>
              <Underlined to='/' style={{ textDecoration: 'none' }}>Home</Underlined>
              <Underlined to='/create' style={{ textDecoration: 'none' }}>Create New Friend</Underlined>
            </NavLinks>
          </NavBar>
        </Container>

        <Friends />
      </div>
    );
  }

  export default App;