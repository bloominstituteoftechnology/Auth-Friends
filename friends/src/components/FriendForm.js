import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.changeHandler}
          required
        />
        <input
          type="text"
          value={this.state.age}
          name="age"
          onChange={this.changeHandler}
          required
        />
        <input
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.changeHandler}
          required
        />
        <input type="submit" value="Add New Friend" />
      </form>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(FriendForm);
