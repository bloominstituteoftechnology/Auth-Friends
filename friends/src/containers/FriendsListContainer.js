import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

import { FriendsList } from '../components';
import CreateFriendForm from '../components/CreateFriendForm';

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
      return (
        <div className="container">
          <CreateFriendForm />
          <FriendsList friends={friends} />
        </div>
      );
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

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListContainer);