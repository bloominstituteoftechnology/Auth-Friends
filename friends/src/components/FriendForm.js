import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Flex } from "rebass";
import { handleAddFriend } from "../actions/index";

class FriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddFriend(this.props.token, this.state);
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <Flex>
        <Card width={[256, 320]} mx="auto" p={2} variant="basic">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter Name"
            />
            <input
              type="text"
              name="age"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter Age"
            />
            <input
              type="text"
              name="email"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter Email"
            />

            <button type="submit">add friend</button>
          </form>
        </Card>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  token: state.loginReducer.token
});

export default connect(
  mapStateToProps,
  { handleAddFriend }
)(FriendForm);
