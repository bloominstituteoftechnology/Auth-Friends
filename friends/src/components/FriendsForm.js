import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', email: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, age, email } = this.state;
    this.props.addFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
          name="name"
          required
        />
        <input
          type="number"
          value={this.state.age}
          placeholder="Age"
          onChange={this.handleChange}
          name="age"
          required
        />
        <input
          type="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
          name="email"
          required
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(FriendsForm);
