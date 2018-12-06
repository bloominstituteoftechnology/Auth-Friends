import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../store/actions';
import Friends from '../components/Shop';

class FriendsView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
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
