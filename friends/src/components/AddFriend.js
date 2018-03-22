import React, { Component, Fragment } from "react";
import { Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import addFriend from "../actions/addFriendAction";
import getFriends from "../actions/getFriendsAction";

class FriendsList extends Component {
  state = {
    newName: "",
    newAge: "",
    newEmail: ""
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.formSubmitted}>
          <Input
            required
            name="newName"
            onChange={this.handleNameChange}
            type="text"
            placeholder="Enter name"
            value={this.state.newName}
          />
          <Input
            required
            name="newAge"
            onChange={this.handleAgeChange}
            type="number"
            placeholder="Enter age"
            value={this.state.newAge}
          />
          <Input
            required
            name="newEmail"
            onChange={this.handleEmailChange}
            type="email"
            placeholder="Enter email"
            value={this.state.newEmail}
          />
          <Button>Add Friend</Button>
        </Form>
        <Button onClick={() => this.props.getFriends()}>Get Again</Button>
      </Fragment>
    );
  }

  formSubmitted = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
  };

  handleNameChange = event => {
    this.setState({ newName: event.target.value });
  };
  handleAgeChange = event => {
    this.setState({ newAge: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ newEmail: event.target.value });
  };
}

export default connect(null, { addFriend, getFriends })(FriendsList);
