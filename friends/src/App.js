import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { connect } from "react-redux";
import { getFriendsData } from "./actions";
import FriendCard from "./components/Friend";

class App extends Component {
  componentDidMount() {
    console.log("component mount");
    this.props.getFriendsData();
  }
  render() {
    return (
      <div className="App">
        <h2>Friends app:</h2>
        <div className="friends-container">
          {this.props.friends.map(friend => (
            <FriendCard friend={friend} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    error: ""
  };
}
export default connect(
  mapStateToProps,
  {
    getFriendsData
  }
)(App);
