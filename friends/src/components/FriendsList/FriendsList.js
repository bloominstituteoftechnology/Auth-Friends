import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../actions';
import './FriendsList.css';

class FriendsList extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <ul>
        {this.props.friends.map(friend => {
          return <li key={friend.name}>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </li>
        })}
      </ul>
    );
  };
};
FriendsList.defaultProps = {
  friends: [],
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error,
  }
}
export default connect(mapStateToProps, {getFriends})(FriendsList);