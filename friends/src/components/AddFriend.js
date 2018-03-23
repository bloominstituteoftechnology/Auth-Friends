import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add_new_friend } from '../actions';

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    };


  render() {
    return (
     <form type='submit'>
      <fieldset>
      <label>name:</label>
      <input
       type='text'
        name='name'
        value={this.state.name}
        onChange={this.handleNewInput}
          />
        <label>age:</label>
           <input
            type='number'
            name='age'
            value={this.state.age}
            onChange={this.handleNewInput}
          />
          <label>email:</label>
           <input
            type='email'
          name='email'
            value={this.state.email}
          onChange={this.handleNewInput}
      />
        <button type='submit' onClick={this.submitFriend}>add New Friend</button>
          
          </fieldset>
        </form>
    );
  }

  handleNewInput = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
  }

  submitFriend = event => {
      const { name, age, email } = this.state;
      const newFriend = { name, age, email };
      this.props.add_new_friend(newFriend); 
      this.setState({
        name: '',
        age: '',
        email: ''
      });
  };

} 
  export default connect(null, { add_new_friend })(AddFriend); 
