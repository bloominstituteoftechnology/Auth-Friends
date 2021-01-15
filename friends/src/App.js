import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import './App.css';
import FriendList from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute  path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />

        </Switch>
        <Route exact path="/add-friend" component={AddFriend} />
      </div>
    </Router>
  );
}

export default App;