import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import { getAllFriends } from './actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getAllFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state
  };
};

export default connect(mapStateToProps, { getAllFriends })(App);