import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
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
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

​export default App;
