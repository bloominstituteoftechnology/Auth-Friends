import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions/index";

class Friends extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, index) => {
            return (
              <li key={friend.index}>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { fetchFriends })(Friends);
