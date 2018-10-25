import React, { Component } from 'react';

import FriendCard from './FriendCard'

class Friends extends Component {
  render() { 
    return (
      <div className="Friends">
        {this.props.friends.map( (friend, i) => {
          return <FriendCard key={friend.id} {...friend} />
        })} 
      </div>
    );
  }
}
 
export default Friends;