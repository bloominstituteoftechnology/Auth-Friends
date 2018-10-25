import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from '../store/actions';
import ReactLoading from 'react-loading';

import Friend from '../Views/Friend';
import FriendsForm from '../Views/FriendsForm';

import './ComponentsStyle.css';

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

  handleClick = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    if (this.props.fetching) {
      return (
        <div className="animation">
          <ReactLoading type={'Cylon'} color={'red'} />
        </div>
      );
    }
    return (
      <div>
        <div className="friend-list">
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
    friends: state.friends,
    fetching: state.friends.fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend }
)(FriendsList);
