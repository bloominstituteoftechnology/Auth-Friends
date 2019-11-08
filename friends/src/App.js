import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getToken } from './utils/api';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Account from './components/Account';
import Logout from './components/Logout';
import FriendList from './components/FriendList';
import CreateFriend from './components/CreateFriend';
import UpdateFriend from './components/UpdateFriend';

import './App.css';

function App() {
  const signedIn = getToken()

  return (
    <div className="wrapper">
    <div className="App">
      {/* <div className="form"></div> */}
        <nav>
        <Link to='/'>Home</Link>

          {!signedIn && <Link to="/login">Login</Link>}
          {signedIn && <Link to="/account">My Account</Link>}
          {signedIn && <Link to="/logout">Logout</Link>}
          <Link to='/friendlist'>Friend List</Link>
          <Link to='/updatefriend'>Update Friend</Link>
          <Link to='/createfriend'>Create Friend</Link>
        </nav>

        <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/friendlist' component={FriendList} />
      <PrivateRoute exact path='/updatefriend' component={UpdateFriend} />
      <PrivateRoute exact path='/createfriend' component={CreateFriend} />
      <PrivateRoute exact path='/account' component={Account} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </div>
    </div>
  );
}

export default withRouter(App);
