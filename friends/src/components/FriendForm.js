import React, { Component } from 'react';
import Friend from './Friend';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({ inputText: '' });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" onChange={this.changeHandler} />
        <input type="text" name="age" onChange={this.changeHandler} />
        <input type="text" name="email" onChange={this.changeHandler} />
        <input type="submit" value="Add New Friend" />
      </form>
    );
  }
}
