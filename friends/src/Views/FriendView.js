import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFreinds, addFriend, updateFriend } from "../actions";
import Friend from "../components/Friends";
import AddFriendForm from "./AddFriendForm";

class FriendView extends Component {
  componentDidMount() {
    this.props.fetchFreinds();
  }
  render() {
    console.log(this.props.friends);
    return (
      <div>
        <h1>Redux Friends</h1>
        <AddFriendForm />
        <Friend friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    updatingFriend: state.updatingFriend,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFreinds, addFriend, updateFriend }
)(FriendView);
