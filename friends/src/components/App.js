import React, { Component } from "react";
import Friends from "./Friends";
import "./App.css";

import { fetchFriends } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    console.log(this.props);
    console.log(this.props.fetchFriends);
    const { friends } = this.props;
    return (
      <div className="App">
        <h2>Sup</h2>
        {this.props.error && <h2>Error loading friends...</h2>}

        {this.props.fetching ? (
          <h3>Loading friends..</h3>
        ) : (
          <Friends friends={friends} />
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
