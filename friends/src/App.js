import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchFriends } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img
            src="https://media3.giphy.com/media/IwSG1QKOwDjQk/giphy.gif"
            alt="loading animation"
            className="loading-animation"
          />
        ) : null}
        {this.props.friends.map(friend => {
          return <div key={friend.name}>{friend.name}</div>;
        })}
        {this.props.error !== null ? <div>{this.props.error}</div> : null}
      </div>
    );
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
