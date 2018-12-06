import React from "react";
import { connect } from "react-redux";

import {
  fetchFriends,
  fetchFriend,
  addFriend,
  updateFriend,
  deleteFriend
} from '../actions'

class FriendList extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
    this.props.fetchFriend(2);
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading ...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <h1>Friend List</h1>
        {
          this.props.friends.map( friend => (
            <div key={friend.id}>
              {friend.name}, {friend.age}, {friend.email}
            </div>
          ))
        }
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  state => state.friendsReducer
  ,
  {
    fetchFriends,/* action creators go here */
    fetchFriend,
    updateFriend,
    addFriend,
    deleteFriend
  }
)(FriendList);
