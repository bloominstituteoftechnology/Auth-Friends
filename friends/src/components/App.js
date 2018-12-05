import React, { Component } from "react";
import "./App.css";

import { fetchFriends } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    console.log(this.props.friends);
    const { friends } = this.props;
    console.log(friends);
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
  return {
    friends: state.friends.friends,
    fetching: state.friends.fetchFriends,
    fetched: state.friends.friendsFetched
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
