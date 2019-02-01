import React from "react";
import Friend from "./Friend";

class FriendsList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return this.props.friends.map(friend => (
      <Friend
        name={friend.name}
        id={friend.id}
        deleteFriend={this.props.deleteFriend}
      />
    ));
  }
}

export default FriendsList;
