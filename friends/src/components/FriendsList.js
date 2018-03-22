import React, { Component } from 'react';
import { connect } from 'react-redux';
import getFriends from '../actions/getFriends';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, index) => {
            return (
              <li key={friend.id}>
                <div className="friendName">Name: {friend.name}</div>
                <div className="friendAge">Age: {friend.age}</div>
                <div className="friendEmail">Email: {friend.email}</div>
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
    fetching: state.fetching,
    friends: state.friends,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
