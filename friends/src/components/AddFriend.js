import React from "react";
import { connect } from "react-redux";

import { addFriend } from "../actions/actions";


export class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      email: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submitFriend}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputHandler}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.inputHandler}
          placeholder="Age"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.inputHandler}
          placeholder="Email"
        />
        <button type="submit">Add New Friend</button>
      </form>
    );
  }
}

const MapStateToProps = state => {
  return {};
};

export default connect(
  MapStateToProps,
  { addFriend }
)(AddFriend);
