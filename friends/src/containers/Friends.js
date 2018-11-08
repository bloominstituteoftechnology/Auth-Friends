import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFriends } from '../actions';
import Friend from '../components/Friend';

class Friends extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(Friends);
