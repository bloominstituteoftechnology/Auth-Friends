import React, { Component } from "react";

class NewFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Enter name",
      age: "Enter age",
      email: "Enter email"
    };
  }

  changeHandler = e => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    }
    if ((e.target.name = "age")) {
      this.setState({ age: e.target.value });
    } else {
      this.setState({ email: e.target.value });
    }
  };

  render() {
    return (
      <div className="add-friend-form">
        <input type="text" name="name" value={this.state.name} />
        <input type="text" name="age" value={this.state.age} />
        <input type="text" name="email" value={this.state.email} />
      </div>
    );
  }
}

export default NewFriend;
