import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h1>Loading...</h1>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.name}>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, {
    fetchFriends
})(App);