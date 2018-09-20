import React, { Component } from 'react';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <FriendForm />
      </div>
    );
  }
}
