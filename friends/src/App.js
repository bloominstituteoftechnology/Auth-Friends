import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from './components/friends';
import { getFriends } from './actions';
import FriendForm from './components/FriendForm';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Friends />
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(App);

