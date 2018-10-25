import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FriendsList } from '../components';
import { fetchFriends } from '../actions';

class FriendsListView extends Component {
  componentDidMount = () => this.props.fetchFriends();

  renderFriends = () => {
    return this.props.friends ? (
      <FriendsList friends={this.props.friends} />
    ) : (
      <div>Loading friends...</div>
    );
  };

  render() {
    return <div>{this.renderFriends()}</div>;
  }
}

const mapStateToProps = ({ friends }) => {
  return { friends };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsListView);
