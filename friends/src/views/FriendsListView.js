import React from "react";
import { connect } from "react-redux";

import FriendsList from "../components/FriendsList";
import FriendsForm from "../components/FriendsForm";
import { fetchFriends } from "../actions/index";

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
        <h1>Hello from friends view</h1>
        <FriendsList friendsList={this.props.friendsList} />
        <FriendsForm />
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
    fetchFriends
  }
)(FriendsListView);
