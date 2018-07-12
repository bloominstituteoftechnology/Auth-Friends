import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './FriendForm';

export default class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:5000/friends';
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.handleNewFriend = this.handleNewFriend.bind(this);
  }

  handleInput = e => {
    let fieldName = e.target.name;
    let value = e.target.value;
    if (fieldName === 'age') value = parseInt(value, 10);
    this.setState({ [fieldName]: value });
  };

  handleNewFriend(e) {
    e.preventDefault();
    let { friendList, ...rest } = this.state;
    let context = this;
    let friendRequest = axios.post(this.url, rest);
    friendRequest
      .then(response => {
        context.setState({ friendList: response.data });
        context.props.history.push('/');
      })
      .catch(response => {
        alert('Add friend failed! ' + response);
      });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    return (
            <FriendForm
              nameInput={this.state.name}
              ageInput={this.state.age}
              emailInput={this.state.email}
              handleInput={this.handleInput}
              handleFriendForm={this.handleNewFriend}
            />
          )}
}
