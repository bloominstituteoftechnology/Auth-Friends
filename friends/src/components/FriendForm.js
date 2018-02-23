import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };
  
  handleAddFriend = (event) => {
    event.preventDefault()
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddFriend}>
          <input
            onChange={this.handleNameChange}
            placeholder='Name'
            value={this.state.name}
          />
          <input
            onChange={this.handleAgeChange}
            placeholder='Age'
            value={this.state.age}
          />
          <input
            onChange={this.handleEmailChange}
            placeholder='Email'
            value={this.state.email}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addFriend })(FriendForm);