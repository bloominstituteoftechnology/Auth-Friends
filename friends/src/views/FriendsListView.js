import React from "react";
import { connect } from "react-redux";
import { fetchFriends, addFriend } from "../actions";

import FriendsList from "../components/FriendsList";
// import actions

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetching) {
      return <h1>FETCHING DATA</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <FriendsList friends={this.props.friends} />;
        <button
          onClick={() => {
            this.props.addFriend({
              name: "Chance",
              age: 22,
              email: "chance@email.com"
            });
          }}
        >
          Add Friend
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.FriendsReducer.friends,
    isFetching: state.FriendsReducer.isFetching,
    error: state.FriendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend }
)(FriendsListView);
