import React, { Component } from 'react';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  handleFriendInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
    this.props.addFriend(friend);
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="friend name"
          onChange={this.handleFriendInput}
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="friend age"
          onChange={this.handleFriendInput}
          name="age"
          value={this.state.age}
        />
        <input
          type="text"
          placeholder="friend email"
          onChange={this.handleFriendInput}
          name="email"
          value={this.state.email}
        />
        <button onClick={this.handleSubmit}>Add New Friend</button>
      </div>
    );
  }
}
export default FriendForm;
