import React from 'react';
import { Link, Route, Switch } from "react-router-dom"
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Log In</Link>
        <Link to="/myfriends">Friends</Link>
      </nav>
      <Switch>
        <Route exact path = "/login" component={Login} />
        <PrivateRoute exact path="/myfriends" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;