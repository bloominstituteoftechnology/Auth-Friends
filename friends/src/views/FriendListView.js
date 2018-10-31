import React from "react";
import { connect } from "react-redux";
import { FriendList } from "../components";
import { getFriends } from "../actions";

class FriendListView extends React.Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching friends...</h2>;
    }
    return (
      <div className='FriendsList_wrapper'>
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetching: state.friendsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendListView);