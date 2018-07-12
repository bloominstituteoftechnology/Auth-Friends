import React from 'react';
import Friend from './Friend';

class FriendsList extends React.Component {
  render() {
    return (
       <div>{this.props.friends.map(friend => {
        return <Friend key={friend.id} friend={friend} handleUpdate={this.props.handleUpdate} />
      })}</div>
    )
  }
}

export default FriendsList
