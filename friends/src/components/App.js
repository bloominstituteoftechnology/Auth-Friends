import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchFriends } from "../actions";
import Friends from "./Friends";
import CreateFriendForm from "./CreateFriendForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} />
        <CreateFriendForm friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetching
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
