import React from 'react';
import {connect} from 'react-redux';
class FriendsList extends React.Component {
  
  render() { 
    return ( 
        this.props.friends.map( friend => (
        <p key={friend.id}>
          {friend.name}, {friend.age}, {friend.email} 

        </p>))
     );
  }
}

const mapStatetoProps = state => {
  return {
    friends: state.friends
  }
}
 
export default connect(mapStatetoProps, {})(FriendsList);
