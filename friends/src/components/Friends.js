import React from "react";
import { connect } from "react-redux";

import { AddFriend } from "./AddFriend";
import { Friend } from "./Friend";
import { getFriends } from "../actions/actions";

export class Friends extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
        <div>
          {this.props.loading ? <h1>Loading Friends...</h1> : null}
          {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
          {this.props.friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
          {!this.props.loading && this.props.error === '' ?<AddFriend /> : null}
        </div>
        
      </>
    );
  }
}

const MapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    friends: state.friends
  };
};

export default connect(
  MapStateToProps,
  { getFriends }
)(Friends);
