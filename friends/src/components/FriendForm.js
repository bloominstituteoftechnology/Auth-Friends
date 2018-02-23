import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriend } from '../actions/index';
import './index.css';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  updateFriend = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    };

    this.props.createFriend(newFriend);

    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render = () => {
    return (
      <div className="friend__form">
        <form type="submit" onSubmit={this.addFriend}>
          <div className="form__text">Add a new Friend!</div>
          <input
            type="text"
            className="form__input"
            placeholder="Name"
            onChange={this.updateFriend}
            name="name"
            value={this.state.name}
          />
          <input
            type="number"
            className="form__input"
            placeholder="Age"
            onChange={this.updateFriend}
            name="age"
            value={this.state.age}
          />
          <input
            type="email"
            className="form__input"
            placeholder="Email"
            onChange={this.updateFriend}
            name="email"
            value={this.state.email}
          />
          <input type="submit" value="submit" className="form__button" />
        </form>
      </div>
    );
  };
}

export default connect(null, { createFriend })(FriendForm);
