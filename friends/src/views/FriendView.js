import React, { Component } from "react";
import { connect } from "react-redux";

import Friend from "../components/Friend/Friend";
import { getFriends } from "../store/actions";

class FriendView extends Component {
  componentDidMount() {
    if (this.props.friends.length === 0) {
      this.props.getFriends();
    }
  }
  render() {
    return (
      <Friend
        history={this.props.history}
        match={this.props.match}
        friends={this.props.friends}
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
  { getFriends }
)(FriendView);
