import React, { Component } from "react";

export default class AddFriend extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    email: ""
  };

  onChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="addName">
            New Friend's Name:
            <input
              id="addName"
              type="text"
              placeholder="name"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="addAge">
            Age:
            <input
              type="text"
              id="addAge"
              placeholder="age"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="addEmail">
            Email:
            <input
              type="email"
              id="addEmail"
              placeholder="email"
              onChange={this.onChange}
            />
          </label>

          <button type="submit">Click to Add</button>
        </form>
      </div>
    );
  }
}
