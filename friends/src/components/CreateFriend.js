import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriends } from '../actions';

class AddFriend extends Component {
  state = {
    name: '',
    age: '',
    email:''
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    const { name, age, email } = this.state;
    const newFriend = { name, age, email };
    this.props.createFriends(newFriend);
    this.setState({
      name:'',
      age:'',
      email:'',
    });
  };
}
  
  render() {
    return (
      <div>
      <input
	name='name'
	value={this.state.name}
	onChange={this.handleInput}
	/>;
      <input
	name='age'
	value={this.state.age}
	onChange={this.handleInput}
	/>;
      <input
	name='email'
	value={this.state.email}
	onChange={this.handleInput}
	/>;
      <button onClick={this.handleSubmit}>add friend</button>;
      </div>
     );
  }

export default connect(null, {createFriends})(AddFriend);
