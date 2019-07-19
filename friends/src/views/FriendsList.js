import React, { Component } from 'react';

import Friend from './Friend';
import FriendForm from './FriendForm';

export default class FriendsList extends Component {
  render() {
    return (
      <ul>
        {this.props.friends.map(friend => {
          return <Friend key={friend.name} friend={friend} />;
        })}
        <FriendForm />
      </ul>
    );
  }
}
