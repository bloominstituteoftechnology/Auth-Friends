import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "../components";
import { fetchFriends } from "../actions";

class FriendsListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetchingFriends) {
      return (
        <div className="FriendsList_wrapper">
          <FriendsList characters={this.props.friends} />;
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends,
    fetching: state.friends.fetching
  };
};
export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsListView);
