import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/actions';
import FriendForm from './FriendForm';

class AddFriendForm extends Component {
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

  handleNewFriend = e => {
    e.preventDefault();
    let { friendList, ...rest } = this.state;
    this.props.handleSubmit(rest);
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
              handleSubmit={this.handleNewFriend}
            />
          )}
}

export default connect(null, {handleSubmit: addFriend})(AddFriendForm);