import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createFriend } from '../actions';

class CreateFriend extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createFriend = e => {
    e.preventDefault();
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.createFriend(friend);
    this.setState({ name: '', age: '', email: '' });
  };
  render() {
    return (
      <form onSubmit={this.createFriend}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
          type="text"
        />
        <input
          name="age"
          value={this.state.age}
          onChange={this.handleInput}
          type="text"
        />
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
          type="text"
        />
        <button>Add New Friend</button>
      </form>
    );
  }
}

export default connect(
  null,
  { createFriend }
)(CreateFriend);
