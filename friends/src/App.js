import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';
import { FriendForm } from './components';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendForm {...this.props} />
        {this.props.friends.map((friend, index) => (
          <div key={friend+index}>{friend.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);