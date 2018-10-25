import React from "react";
import { connect } from "react-redux";

import FriendsList from "../components/FriendsList";
import FriendsForm from "../components/FriendsForm";
import { fetchFriends, addFriend } from "../actions/index";

class FriendsListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <FriendsList friendsList={this.props.friendsList} />
        <FriendsForm addFriend={this.props.addFriend} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friendsList: state.friends.friendsList
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(FriendsListView);
