import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getToken } from './utils/api';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Account from './components/Account';
import Logout from './components/Logout';
import FriendList from './components/FriendList';
import DisplayFriend from './components/DisplayFriend';
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
          <Link to='/displayfriend'>Display Friend</Link>
          <Link to='/updatefriend'>Update Friend</Link>
        </nav>

      <Route exact path='/friendlist' component={FriendList} />
      <ul>
        <Route exact path='/displayfriend' component={DisplayFriend} />
        <Route exact path='/updatefriend' component={UpdateFriend} />
        </ul>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/account' component={Account} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </div>
    </div>
  );
}

export default withRouter(App);
