import React, { Component } from "react";

import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import { connect } from "react-redux";

import { fetchFriends, addFriend, deleteFriend } from "./store/actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="content-wrapper">
            <Friends {...this.props} />
          </div>
          <div className="form-wrapper">
            <FriendForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isFetchingFriend: state.isFetchingFriends,
  isAddingFriend: state.isAddingFriend,
  isDeletingFriend: state.isDeletingFriend,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend, deleteFriend }
)(App);
