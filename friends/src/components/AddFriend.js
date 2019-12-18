import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class AddFriend extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axiosWithAuth()
      .post("/friends", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="age"
            placeholder="Enter Age"
            value={this.state.age}
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}
