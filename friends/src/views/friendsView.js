import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../store/actions';
import AddFriendForm from '../components/addFriendForm';
import Friends from '../components/friends';

class FriendsView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friends !== this.props.friends) {
      this.props.getFriends();
    }
  }

  render() {
    return (
      <>
        <AddFriendForm {...this.props} />
        <Friends friends={this.props.friends} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetchingFriends: state.fetchingFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends, addFriend }
)(FriendsView);
