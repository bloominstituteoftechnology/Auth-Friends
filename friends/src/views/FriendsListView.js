import React from "react";
import { connect } from "react-redux";
import Friends from "../components/Friends";
import FriendForm from "../components/FriendForm";
import {
  fetchingFriends,
  addFriend,
  deleteFriend,
  updateFriend
} from "../actions";

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.fetchingFriends();
  }

  addFriendHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("inListView", this.props.friends);
    // if (this.props.fetchingFriends) {
    //   return (
    //     <div className="fetching">
    //       <h1>Hold On.. We're Summoning Your Crew.. </h1>
    //     </div>
    //   );
    // }
    return (
      <div>
        <Friends
          friends={this.props.friends}
          deleteFriend={this.props.deleteFriend}
          updateFriend={this.props.updateFriend}
        />

        <FriendForm
          friends={this.props.friends}
          addFriend={this.props.addFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    fetchingFriends: friendsReducer.fetchingFriends,
    addFriend: friendsReducer.addFriend,
    deleteFriend: friendsReducer.deleteFriend,
    updateFriend: friendsReducer.updateFriend
  };
};

export default connect(
  mapStateToProps,
  {
    fetchingFriends,
    addFriend,
    deleteFriend
  }
)(FriendsListView);
