import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchFriends } from "./actions";

class App extends Component {
  render() {
    return <div className="App">APP</div>;
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.friends.fetching,
    fetched: state.friends.fetched,
    error: state.friends.error,
    friends: state.friends.friends
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(App);
