import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriends } from '../actions/friendsActions';

class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitFriend = event => {
    event.preventDefault();
    this.props.postFriends({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFriend}>
          <input
            onChange={this.handleInput}
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            onChange={this.handleInput}
            type="number"
            name="age"
            placeholder="age"
          />
          <input
            onChange={this.handleInput}
            type="email"
            name="email"
            placeholder="email"
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    savingFriends: state.savingFriends,
    error: state.error
  };
};

export default connect(mapStateToProps, { postFriends })(AddFriend);
