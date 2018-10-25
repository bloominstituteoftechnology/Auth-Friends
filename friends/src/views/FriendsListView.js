import React from "react";
import fetchFriends from "../actions";
import {connect} from "react-redux";

import FriendsList from "../components/FriendsList";

class FriendsListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.props.fetchFriends();
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <h2>Fetching Friends</h2>
        ) : (
          <FriendsList friends={this.props.friends} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  {fetchFriends}
)(FriendsListView);
