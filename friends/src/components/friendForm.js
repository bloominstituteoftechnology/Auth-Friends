import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewFriend } from '../actions/createNewFriend';


class FriendForm extends Component {
    state = {
      name: '',
      age: '',
      email: ''
    };

  addFriend = (event) => {
    event.preventDefault();
    const newFriend = Object.assign({}, this.state);
    this.props.createNewFriend(newFriend);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  updateFriend = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  render() {
    return (
      <div className="friendForm">
        <form onSubmit={this.addFriend}>
          <input
            name="name"
            onChange={this.updateFriend}
            placeholder="name"
            value={this.state.name}
          />
          <input
            name="age"
            onChange={this.updateFriend}
            placeholder="age"
            value={this.state.age}
          />
          <input
            name="email"
            onChange={this.updateFriend}
            placeholder="email"
            value={this.state.email}
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createNewFriend })(FriendForm);