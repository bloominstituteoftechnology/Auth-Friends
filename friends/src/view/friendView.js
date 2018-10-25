import React from "react";
import { connect } from "react-redux";

import { friends } from "../components";
import { fetchFriend } from "../actions";

class FriendView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetchFriend();
  }
  render() {
    if (this.props.fetchingFriends) {
      <h1>Getting friends over to your party, please patienly wait</h1>;
    }
    <div>
      <Friends friends={this.props.friends} />;
    </div>;
  }
}
const mapStateToProps = (state = {
  fetchingFriends: props.friendReducer.fetchingFriends,
  friendsFetched: props.friendReducer.friendsFetched,
  friendsSaved: props.friendReducer.friendsSaved,
  savingFriends: props.friendReducer.savingFriends,
  updatingFriend: props.friendReducer.updatingFriend,
  friendUpdated: props.friendReducer.friendUpdated,
  deletingFriend: props.friendReducer.deletingFriend,
  friendDeleted: props.friendReducer.friendDeleted,
  friends: props.friendReducer.friends,
  error: props.friendReducer.error
});
