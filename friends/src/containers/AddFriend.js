import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <form className="add-friend" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
          required
        />
        <input
          name="age"
          type="number"
          value={age}
          placeholder="Age"
          onChange={this.handleChange}
          required
        />
        <input
          name="email"
          type="text"
          value={email}
          placeholder="email"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Friend</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(AddFriend);
