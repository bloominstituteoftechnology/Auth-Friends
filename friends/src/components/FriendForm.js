import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/actions.js';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  render() {
    return (
      <form onSubmit={this.props.addFriend(this.state)} className="friend-form">
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />

        <label>Age</label>
        <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    );
  }

  handleInputChange = event => {
    const name = event.target.name;
    const age = event.target.age;
    const email = event.target.email;
    let value = event.target.value;

    this.setState({ [name]: value, [age]: value, [email]: value });
  };
}

export default connect(null, { addFriend })(FriendForm);
