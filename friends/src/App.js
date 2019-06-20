import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/pages/Home";
import FriendForm from "./components/pages/AddFriend";
import FriendUpdate from "./components/pages/changeFriend";
import PrivateRoute from "./components/withAuth/authRouter.js";
import Nav from "./components/nav/nav";
import Login from "./components/LoginComponent/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/Home" component={Friends} key={Date.now()} />
      <PrivateRoute
        exact
        path="/form"
        component={FriendForm}
        key={Date.now()}
      />
      <PrivateRoute
        exact
        path="/update"
        component={FriendUpdate}
        key={Date.now()}
      />
    </Router>
  );
}

export default App;
