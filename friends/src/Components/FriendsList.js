import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friend from '../Views/Friend';
import FriendsForm from '../Views/FriendsForm';

class FriendsList extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
        <FriendsForm input={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { friendFetch }
)(FriendsList);
