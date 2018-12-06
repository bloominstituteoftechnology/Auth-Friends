import React from "react";
import { addFriend } from "../actions";
import { connect } from "react-redux";

class CreateFriend extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  makeFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.makeFriend}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="name"
          required
        />
        <input
          name="age"
          type="number"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="age"
        />
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <button type="submit">Add New Pal!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    savingFriend: state.savingFriend
  };
};

export default connect(
  mapStateToProps,
  { addFriend }
)(CreateFriend);
