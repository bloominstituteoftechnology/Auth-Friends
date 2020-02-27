import React from "react";

class NewFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.friend.name !== "" &&
      this.state.friend.age !== "" &&
      this.state.friend.email !== ""
    ) {
      this.props.addFriend(this.state.friend);
      this.setState({
        friend: {
          name: "",
          age: "",
          email: ""
        }
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="age"
          type="text"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button className="button" type="submit">Add Friend</button>
      </form>
    );
  }
}

export default NewFriendForm;