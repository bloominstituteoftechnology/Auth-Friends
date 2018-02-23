import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../actions';

class UpdateFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleSubmit = () => {
    event.preventDefault();
    const { name, age, email } = this.state;
    this.props.updateFriend(this.props.id ,{name, age, email});
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onchange={this.handleInput}
        />
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleInput}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <button type="submit">Update Friend</button>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    updatingFriends: state.friendsReducer.updatingFriends,
    error: state.friendsReducer.error
  }
};

export default connect(mapStateToProps, { updateFriend })(CreateFriendForm);