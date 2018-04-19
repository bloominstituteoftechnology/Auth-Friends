import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFriend } from '../actions';

class CreateFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = _ => {
    const { name, age, email } = this.state;
    this.props.saveFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <form className="add-form">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Enter Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Enter Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Enter Email"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleSubmit()} type="button">
          Add Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    savingFriends: state.savingFriends
  };
};

export default connect(mapStateToProps, { saveFriend })(CreateFriend);
