import React from "react";

export default class AddFriend extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form
        onSubmit={
          this.state.name && this.state.age && this.state.email
            ? () => this.props.handleAddFriend(this.state.name, this.state.age, this.state.email)
            : null
        }
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
