import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchFriends } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        {this.props.friends.map(friend => {
          return <div key={friend.id}>{friend.name}</div>;
        })}
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
