import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friend from './Friend';

export class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    if (this.props.fetchingFriends) {
      return <h3>I have friends I swear...</h3>;
    }
    return (
      <div>
        {this.props.friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('MAPPINGSTATE', state);
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
