import React, { Component } from 'react';

import FriendsList from './FriendsList.js';

class FriendsContent from React {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Friends!</h1>
        <FriendsList />
      </div>
    );
  }
}

export default FriendsContent;
