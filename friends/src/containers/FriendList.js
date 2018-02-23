import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

let FriendList = (props) => {
  return (
    <div className="friend-list">
      {
        props.friends.map((friend) => {
          return (
            <div>{friend.name}</div>
          );
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      friends: state.friends
  };
};
export default connect(mapStateToProps, { getFriends })(FriendList);