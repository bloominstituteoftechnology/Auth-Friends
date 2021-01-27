import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import Navbar from './components/Navbar';
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} /> 
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route component={LoginForm} />
          <Route component={Logout} />
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
