import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateFriend from './CreateFriend';
import { fetchFriends, createFriend } from '../actions';

import RenderFriend from './RenderFriend';

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <CreateFriend />
        {friends.friends.map(friend => (
          <RenderFriend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  errors: state.errors,
  request: state.request
});

export default connect(
  mapStateToProps,
  { fetchFriends, createFriend }
)(FriendsList);
