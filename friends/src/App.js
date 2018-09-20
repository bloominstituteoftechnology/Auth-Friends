
import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { fetchFriends } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
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
  console.log(state);
  return { 
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendAdded: state.friendAdded,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  /* actions go here */
  fetchFriends
})(App);
