import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/pages/Home";
import FriendForm from "./components/pages/AddFriend";
import FriendUpdate from "./components/pages/changeFriend";
import Nav from "./components/nav/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Friends} key={Date.now()} />
      <Route exact path="/form" component={FriendForm} key={Date.now()} />
      <Route exact path="/update" component={FriendUpdate} key={Date.now()} />
    </Router>
  );
}

export default App;
