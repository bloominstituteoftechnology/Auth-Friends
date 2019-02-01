import React, { Component } from "react";

class FriendsForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = friend => {
    this.props.addFriend(friend);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={() => this.addFriend(this.state)}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          className="add-btn"
          type="button"
          value="Add New Friend"
          onClick={() => this.addFriend(this.state)}
        />
      </form>
    );
  }
}

export default FriendsForm;
