import React, { Component } from "react";
import FriendComponent from "./FriendComponent";
import { connect } from "react-redux";
import { getFriends } from "../actions/actions";

class FriendListComponent extends Component {
  render() {
    return (
      <div>
        FriendListComponent Loaded
        <FriendComponent />
        {this.props.friends.map(friend => <h1>{friend.name}</h1>)}
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
