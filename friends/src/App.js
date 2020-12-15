import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/LoginForm";
// import Friends from './components/Friends';
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} /> 
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
        <footer>
          <div>
            <h4>Contact Us</h4>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
