import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div 
          key={friend.id}
        >
          {friend.name}
          {friend.age}
          {friend.email}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps, {fetchFriends})(Friends);