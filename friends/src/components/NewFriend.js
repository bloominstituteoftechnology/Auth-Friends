import React from "react";
import axiosWithAuth from "../utill/axiosWithAuth";
import { Button, TextField, Container } from "@material-ui/core";
// import styled from "styled-components";

export default class AddFriend extends React.Component {
  state = {
    newFriend: {
      name: "",
      email: "",
      age: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    e.preventDefault();
    // login to retreive the JWT token
    // add the token to localStorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      // base of '/api/login' inside axiosWithAuth in utils folder
      .post("/friends", this.state.newFriend)
      .then((res) => {
        console.log(res);
        this.props.history.push("/friendslist");
      })
      .catch((err) => console.log(err.response));
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.addFriend}>
          <TextField
            type="text"
            name="name"
            placeholder="name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <TextField
            type="email"
            name="email"
            placeholder="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />
          <TextField
            type="number"
            name="age"
            placeholder="age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type='submit'>
            Add Friend
          </Button>
        </form>
      </Container>
    );
  }
}