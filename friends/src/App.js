import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./Friends";
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
          <FriendForm />
          <Friends />
        {this.props.error ? <h3>Error Fetching Friends</h3> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    gettingFriends: state.friendsReducer.gettingFriends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
