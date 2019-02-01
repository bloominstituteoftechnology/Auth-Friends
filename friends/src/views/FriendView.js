import React, { Component } from "react";
import { connect } from "react-redux";

import Friend from "../components/Friend/Friend";
import { getFriends, deleteFriend } from "../store/actions";

class FriendView extends Component {
  componentDidMount() {
    if (this.props.friends.length === 0) {
      this.props.getFriends();
    }
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id)
    this.props.history.push('/api/friends')
  }
  render() {
    return (
      <Friend
        history={this.props.history}
        match={this.props.match}
        friends={this.props.friends}
        deleteFriend={this.deleteFriend}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};
export default connect(
  mapStateToProps,
  { getFriends, deleteFriend }
)(FriendView);
