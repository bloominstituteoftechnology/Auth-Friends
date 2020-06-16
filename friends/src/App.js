import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import FriendsList from "./components/friendsList";
import PrivateRoute from "./components/ProtectedRoute";
import AddFriend from "./components/addFriend";

function App() {
  return (
    <Router>
      <div className="myApp">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
