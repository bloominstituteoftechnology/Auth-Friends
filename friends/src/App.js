import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchFriends } from "./actions";

// components
import Loading from "./components/Loading";

class App extends Component {
  componentDidMount() {
    let URL = "http://localhost:5000/api/friends";
    this.props.fetchFriends(URL);
  }

  render() {
    return (
      <div className="App">
        <Loading fetching={this.props.fetching} />
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
