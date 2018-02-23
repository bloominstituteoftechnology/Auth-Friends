import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveFriend } from "../actions";

class CreateFriendForm extends Component {
  state = {
    age: "",
    email: "",
    name: ""
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") this.setState({ name: value });
    if (name === "age") this.setState({ age: value });
    if (name === "email") this.setState({ email: value });
  };
  render() {
    return (
      <form onSubmit={this.props.saveFriend(this.state)}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, { saveFriend }) (CreateFriendForm);
