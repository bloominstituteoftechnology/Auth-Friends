import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions/actions';

class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
    this.props.addFriend(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          value={this.state.name}
          name="name"
          onChange={this.handleInput}
        />
        <input
          placeholder="age"
          value={this.state.age}
          name="age"
          onChange={this.handleInput}
        />
        <input
          placeholder="email"
          value={this.state.email}
          name="email"
          onChange={this.handleInput}
        />
        <button>Add Friend</button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { addFriend }
)(AddFriendForm);
