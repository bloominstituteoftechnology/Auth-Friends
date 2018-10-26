import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

export class CreateFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addFriendHandler = (friend) => {
    friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    };
    this.props.addFriend(friend);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.addFriendHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button type="submit">Add friend</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addingFriend: state.friendsReducer.addingFreind,
    friendAdded: state.friendsReducer.friendAdded,
    error: state.friendsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  { addFriend }
)(CreateFriendForm);
