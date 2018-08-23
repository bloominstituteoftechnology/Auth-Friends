import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from './Friends';
import FriendForm from "./FriendForm";
import { getFriends } from "./actions";
import { connect } from "react-redux";

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <FriendForm />
          <Friends />
        </header>
        {this.props.error ? <h3>Error Fetching Friends</h3> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
