import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import logo from './images/friends_logo.png'
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import './App.css';

const StyledHeader = styled.div`
  img{
    width: 25rem;
    margin-top: 2rem;
  }
  h2{
    margin-top: 0;
  }
`

function App() {

  console.log(window.localStorage.token)

  return (
    <Router>
      <div className="App">
      <StyledHeader>
        <img src={logo} alt='friends'/>
        <h2>Index</h2>
      </StyledHeader>

        <div>
          { window.localStorage.token === undefined ? (null) : (<Link to='/logout'>Logout</Link>)}
        </div>
        <Switch>
          <PrivateRoute exact path ='/friends' component={FriendsList} />
          <PrivateRoute exact path ='/logout' component={Logout} />

          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
