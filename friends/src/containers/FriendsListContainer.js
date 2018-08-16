import React, { Component } from "react";
import { connect } from "react-redux";

class FriendsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  addNewFriend = () => {
    console.log("Hey");
  };
  render() {
    return (
      <div>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

mapStateToProps = state => ({
  friendsOnProps: state.addNewFriendReducer.friends
});

export default connect(
  mapStateToProps,
  { addNewFriendOnProps: addNewFriend }
)(FriendsListContainer);
