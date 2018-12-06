import React from "react";
import { connect } from "react-redux";

import { FriendList } from "../components";

import { getFriends } from "../actions";

class FriendView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.isFetching) {
      return <h2>Loading Friends ...</h2>;
    }
    return (
      <div className="">
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    friends: state.friendReducer.friends,
    isFetching: state.friendReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendView);
