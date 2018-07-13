import React from "react";
import { connect } from "react-redux";
import { submitNewFriend } from "../actions/action";

class CreateFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  inputFriend = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitNewFriend = event => {
    event.preventDefault();
    let newFriends = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.submitNewFriend(newFriends);
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          onChange={this.inputFriend}
          placeholder="Name"
          value={this.state.name}
        />
        <input
          type="number"
          name="age"
          onChange={this.inputFriend}
          placeholder="Age"
          value={this.state.age}
        />
        <input
          type="text"
          name="email"
          onChange={this.inputFriend}
          placeholder="Email"
          value={this.state.email}
        />
        <button onClick={this.submitNewFriend}>Add New Friend</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { submitNewFriend }
)(CreateFriendForm);
