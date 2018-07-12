import React, { Component } from 'react';
import Friend from './Friend';

class FriendsList extends Component {
  render() {
    return (
      <ul className="friends-list">
        <Friend />
      </ul>
    );
  }
}

export default FriendsList;