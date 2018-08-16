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

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
       this.props.handleAddFriend({
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
      })
      this.setState({
        name: '',
        age: '',
        email: ''
      })
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <input type="submit" value="add!" />
      </form>
    );
  }
}
