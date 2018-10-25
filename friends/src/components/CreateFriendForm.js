import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      age: null,
      email: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addFriend(
      // this.state.id,
      this.state.name,
      this.state.age,
      this.state.email
    );
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
            required
          />
          <input
            onChange={this.onChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
            required
          />
          <input
            onChange={this.onChange}
            placeholder="Email"
            value={this.state.email}
            name="email"
            type="email"
            required
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
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
  { addFriend }
)(FriendsForm);
