import React from 'react';
class FriendsList extends React.Component {
  constructor(props){
    super(props)
  }
  render() { 
    const deleteFriend = this.props.deleteFriend;
    return ( 
        this.props.friends.map( friend => (
        <p key={friend.id}>
          {friend.name}, {friend.age}, {friend.email} 
          <button onClick={() => deleteFriend(friend.id)}>Delete</button>
        </p>))
     );
  }
}
 
export default FriendsList;
