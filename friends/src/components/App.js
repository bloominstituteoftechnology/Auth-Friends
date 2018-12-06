import React, { Component } from "react";
import Friends from "./Friends";
import CreateFriend from "./CreateFriend";
import "./App.css";

import { fetchFriends } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <h2>Happy FriendKeeper App</h2>
        <CreateFriend />

        {this.props.fetching ? (
          <h3>Loading friends...</h3>
        ) : (
          <Friends friends={this.props.friends} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    fetching: friendsReducer.fetchingFriends,
    error: friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
