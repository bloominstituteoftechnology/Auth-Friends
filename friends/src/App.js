import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/Login'
import MyFriends from './components/MyFriends'
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
          <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/myfriends">Friends</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/myfriends" component={MyFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;


