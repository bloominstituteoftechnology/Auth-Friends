import React from "react";
import { fetchFriends, deleteFriend, addFriend } from "../actions";
import { connect } from "react-redux";
import Friend from "./Friend";
import { rootReducer } from "../reducers";
import "./styles.css";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <ul>
        {this.props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </ul>
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
  { fetchFriends }
)(FriendsList);
