import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchFriends} from "../actions";

class Friends extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
  return (
    <div>
      {this.props.fetchingFriends ? (
        <div> ...fetching your friends. do you have friends? </div>
      ) : (
        <ul>
          {this.props.friends.map(friend => {
            return  <li key={friend.name}>{friend.name}</li>
          })}
        </ul>
  )}
    </div>
  );
};
}



const mapStateToProps = state => {
    return {
      fetchingFriends: state.fetchingFriends,
      friends: state.friends,
      error: state.errorMessage
    };
  };

export default connect(
  mapStateToProps,
  {fetchFriends}
)(Friends);
