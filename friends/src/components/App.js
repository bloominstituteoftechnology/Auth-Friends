import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendForm from "./friendForm";
import FriendList from "./friendList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(
  mapStateToProps,
  {
    getFriends
  }
)(App);
