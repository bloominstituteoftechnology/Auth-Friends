import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import { getData } from "../actions";

class FriendsList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return this.props.friends.map(friend => <Friend name={friend.name} />);
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getData }
)(FriendsList);
