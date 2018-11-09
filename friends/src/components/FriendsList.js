import React, { Component } from 'react';

class FriendsList extends Component {
  render() {
    console.log('props ', this.props);
    return (
      <div>
        {this.props.friends.map(friend => {
          return <p>{friend.name}</p>;
        })}
      </div>
    );
  }
}

export default FriendsList;
