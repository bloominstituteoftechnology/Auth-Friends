import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/loginForm";
import { Route, Link } from "react-router-dom";
import { Button } from "shards-react";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/friendsList";
import { getFriends } from "./actions";
import { Nav, NavItem, NavLink } from "shards-react";
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    friends: state.friends
  };
};
export default connect(
  mapStateToProps,
  { getFriends }
)(App);
