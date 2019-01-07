import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../store/actions';
import AddFriendForm from '../components/addFriendForm';
import Friends from '../components/friends';

class FriendsView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
        <AddFriendForm {...this.props} />
        <Friends {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    isFetchingFriends: state.fetchingFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsView);
