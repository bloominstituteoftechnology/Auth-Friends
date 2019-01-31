import React, { Component } from "react";

class FriendsForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    id: null
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={this.state.age}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
        />
        <input type="button" value="Add New Friend" />
      </form>
    );
  }
}

export default FriendsForm;
