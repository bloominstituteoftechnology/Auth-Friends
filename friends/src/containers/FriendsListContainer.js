import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

import { FriendsList } from '../components';

class FriendsListContainer extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const { fetchingFriends, friends, error } = this.props;

    if (fetchingFriends) {
      return <h3>Loading Friends...</h3>
    } else if (error) {
      return <h3>404 Not Found</h3>
    } else {
      return <FriendsList friends={friends} />
    }
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends,
    fetchingFriends: state.friends.fetchingFriends,
    error: state.friends.error
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsListContainer);
