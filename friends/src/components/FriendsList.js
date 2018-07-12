import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllFriends } from '../actions';
import Friend from './Friend';

class FriendsList extends Component {

  componentDidMount() {
    this.props.getAllFriends();
    console.log('this.props', this.props);
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.friends.map((friend, i) => <Friend key={friend.id} friend={friend} /> )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(mapStateToProps, { getAllFriends })(FriendsList);