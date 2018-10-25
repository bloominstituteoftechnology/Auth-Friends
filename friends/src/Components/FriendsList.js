import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../store/actions';

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

  handleChange = event => {
    if (event.target.name === 'age') {
      const number = parseInt(event.target.value);
      this.setState({ [event.target.name]: number });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

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
  { fetchFriends }
)(FriendsList);
