import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendFetch, friendPost } from '../store/actions';

import Friend from '../Views/Friend';
import FriendsForm from '../Views/FriendsForm';

class FriendsList extends Component {
  state = {
    name: '',
    age: 0,
    email: ''
  };

  componentDidMount() {
    this.props.friendFetch();
  }

  handleChange = event => {
    if (event.target.name === 'age') {
      const number = parseInt(event.target.value);
      this.setState({ [event.target.name]: number });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.props.friendPost(this.state);
    this.setState({ name: '', age: 0, email: '' });
  };

  render() {
    return (
      <div>
        <div>
          {this.props.friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
        <FriendsForm
          input={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
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
  { friendFetch, friendPost }
)(FriendsList);
