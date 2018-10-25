import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFreinds, addFriend, updateFriend } from "../actions";

class FriendView extends Component {
  componentDidMount() {
    this.props.fetchFreinds();
  }
  render() {
    // console.log();
    return (
      <div>
        <h1>Redux Friends</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { fetchFreinds, addFriend, updateFriend }
)(FriendView);
