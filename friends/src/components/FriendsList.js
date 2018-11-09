import React from "react";
import Friend from "./Friend";
import { fetchFriends } from "../actions/friendsActions";
import { connect } from "react-redux";
class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        {this.props.loading ? <h1>LOADING...</h1> : null}
        {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
        {this.props.friends.map(friend => (
          <Friend friend={friend} key={friend.id}/>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    loading: state.friendsReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
