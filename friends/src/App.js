import React from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import FriendsListID from './components/FriendsListID';

function App() {
  const history = useHistory();

  const logout = () => {
      localStorage.removeItem('token');
      history.push('/login');
  };

  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/friends/:id' component={FriendsListID} />
        <Route path='/login' component={Login}/>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
