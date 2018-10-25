import React from 'react';
import { connect } from 'react-redux';

import { FriendsList } from '../components';
import { fetchFriends } from '../actions';

class FriendsListView extends React.Component {
  render() {
    if (this.props.isFetching) {
      console.log('fetching');
      return <div className='loader'>Loading...</div>;
    }
    return (
      <div className='FriendsList_wrapper'>
        <FriendsList friends={this.props.friends} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetching
  }
}

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsListView);