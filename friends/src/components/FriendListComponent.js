import React, { Component } from "react";
import FriendComponent from "./FriendComponent";
import { connect } from "react-redux";
import { getFriends } from "../actions/actions";

class FriendListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.friends.map(friend => <FriendComponent friend={friend} />)}
      </div>
    );
  }

  componentDidMount() {
    this.props.getFriends();
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(FriendListComponent);
