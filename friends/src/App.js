import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchFriends } from "./actions";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a placeholder</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.reducers.friends,
    isFetching: state.reducers.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
