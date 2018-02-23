import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFriend } from "../actions";

class CreateFriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveFriend(this.state);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleInput}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
        </label>
        <button type="submit">Add Friend</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendUpdated: state.friendsReducer.friendUpdated,
    error: state.friendsReducer.error
  };
};

export default connect(mapStateToProps, { saveFriend })(CreateFriendForm);
