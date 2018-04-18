import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'

import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
      {console.log('props', this.props)}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Friends</h1>
        </header>
        <div>
          {this.props.friends.map(friend => {
            return (
            <div key={friend.id}>
              <h1>{friend.name}</h1>
              <strong>{friend.age}</strong>
              <p>{friend.email}</p>
            </div>)
          })}
          
        </div>
      </div>
    );
  }
}

const stateProps = state => {
  console.log('state',state.friendsReducers)
  return {
    friends: state.friendsReducers.friends,
    fetching: state.friendsReducers.fetching,
    fetched: state.friendsReducers.fetched,
    error: state.friendsReducers.error
  }
}

export default connect(stateProps, { fetchFriends })(App);
