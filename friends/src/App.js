import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/loginForm";
import { Route, Link } from "react-router-dom";
import { Button, Container } from "shards-react";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/friendsList";
import { getFriends } from "./actions";
import { Nav, NavItem, NavLink } from "shards-react";
import { connect } from "react-redux";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Container className="friend-button-container">
        <Button outline>
          <Link to="/login">Login</Link>
        </Button>
        <Button outline theme="success">
          <Link to="/friends">Protected Friends</Link>
        </Button>
      </Container>

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
