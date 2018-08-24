import React, { Component } from "react";
import { connect } from "react-redux";
import { createFriends } from "../actions";

class FriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFriend = _ => {
    const { name, age, email } = this.state;
    this.props.createFriends({ name, age, email });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.age}
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.email}
          name="email"
          type="email"
          placeholder="eMail"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddFriend()} type="button">
        New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingFriend: state.creatingFriend
  };
};

export default connect(
  mapStateToProps,
  { createFriends }
)(FriendForm);
