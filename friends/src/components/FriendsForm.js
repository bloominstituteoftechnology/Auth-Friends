import React, { Component } from 'react';

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      friend: { ...this.state.friend, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.friend.name &&
      this.state.friend.name &&
      this.state.friend.name
    ) {
      this.props.addFriend(this.state.friend);
      this.setState({
        friend: {
          name: '',
          age: '',
          email: ''
        }
      });
    } else {
      alert('Missing Information');
    }
  };

  render() {
    return (
      <div className="friendsFormContainer">
        <h2>Add a Friend</h2>
        <form className="friendsForm">
          <input
            required
            type="text"
            placeholder="Name..."
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
            autoComplete="off"
          />
          <input
            required
            type="number"
            placeholder="Age..."
            name="age"
            onChange={this.handleChange}
            value={this.state.friend.age}
            autoComplete="off"
          />
          <input
            required
            type="text"
            placeholder="Email..."
            name="email"
            onChange={this.handleChange}
            autoComplete="off"
            value={this.state.friend.email}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
