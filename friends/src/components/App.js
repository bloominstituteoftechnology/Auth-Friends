import React, { Component } from "react";
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
    // console.log(friends);
    return (
      <div className="App">
        <h2>Sup</h2>
        {friends.map(friend => (
          <div key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.info.friends,
    fetching: state.info.fetchingFriends
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
