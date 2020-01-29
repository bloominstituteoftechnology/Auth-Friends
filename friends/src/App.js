import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

function App() {
    return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/newfriends">Add New Friends</Link>
          </li>
          <li>
            <Link to="/myfriends">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/newfriends" component={FriendsForm} />
          <PrivateRoute path="/myfriends" component ={FriendsList}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
