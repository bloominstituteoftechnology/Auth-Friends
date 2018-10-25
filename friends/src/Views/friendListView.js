import React from "react";
import { connect } from "react-redux";
import { FriendList } from "../components";
import { fetchFriends, deleteFriend } from "../actions";
class FriendListView extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    if (this.props.fetchingFriends) {
      return <h1>Look out...Here Comes Your Friends</h1>;
    }
    return (
      <FriendList
        friends={this.props.friends}
        deleteFriend={this.props.deleteFriend}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error
  };
};
export default connect(
  mapStateToProps,
  {
    fetchFriends,
    deleteFriend
  }
)(FriendListView);
