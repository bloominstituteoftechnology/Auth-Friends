import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../store/actions/index";
import Friend from "./Friend";
import Form from "../components/Form";

class FriendsList extends Component {
  render() {
    if (!this.props.friends || this.props.isFetching) {
      return <h4>Loading Friends...</h4>;
    }
    return (
      <div>
        <Form />
        {this.props.friends.map(friend => (
          <Friend
            key={friend.id}
            {...this.props}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingFriends: state.isFetchingFriends,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
