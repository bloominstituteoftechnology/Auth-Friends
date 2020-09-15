import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import UserFriends from './components/UserFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Auth Friends</h1>
        <Switch>
          <PrivateRoute exact path = "/protected" component = {UserFriends} />
          <Route path ="/login" component = {Login}/>
          <Route component = {Login}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
