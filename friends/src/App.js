import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "./actions";

import "./App.css";

import FriendList from "./components/FriendList";
import Form from "./components/Form";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <FriendList friends={this.props.friends} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
