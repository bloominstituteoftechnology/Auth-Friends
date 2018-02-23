import React, { Component } from 'react';
import { getFriends, createFriend, updateFriend, deleteFriend } from '../actions/actions';

class CreateFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFriend = e => {
    e.preventDefaults();
    this.props.createFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {

    return (
    <div>
      <form onSubmit="">
        <input onChange={this.handleInput} type="text" name="name" />
        <input onChange={this.handleInput} type="text" name="age" />
        <input onChange={this.handleInput} type="text" name="email" />
        <button />
      </form>
    </div>)
  }

}

export default connect({ getFriends, createFriend, updateFriend, deleteFriend })(App);
