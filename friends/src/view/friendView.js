import React from "react";
import { connect } from "react-redux";

import { Friends } from "../components";
import { fetchFriends } from "../actions";

class FriendView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    // if (this.props.fetchingFriends) {
    //   <h1>Fetching some starwar name from wherever</h1>;
    // }
    return (
      <div className="CharactersList_wrapper">
        <Friends friends={this.props.friends} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.friendReducer.fetchingFriends,
    friendsFetched: state.friendReducer.friendsFetched,
    friendsSaved: state.friendReducer.friendsSaved,
    savingFriends: state.friendReducer.savingFriends,
    updatingFriend: state.friendReducer.updatingFriend,
    friendUpdated:state.friendReducer.friendUpdated,
    deletingFriend: state.friendReducer.deletingFriend,
    friendDeleted: state.friendReducer.friendDeleted,
    friends: state.friendReducer.friends,
    error: state.friendReducer.error
  };
};
export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendView);
