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
            <legend>Add Friend Form</legend>
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
              <button type='submit' onClick={this.submitFriend}>Submit New Friend</button>
          </fieldset>
        </form>
    );
  }

  handleNewInput = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
      console.log('event target name: ', event.target.name);
      console.log('event target value: ', event.target.value);
      console.log(this.state);
  }

  // submitFriend() resets form so a new friend can be added and
  // sends formData to application state
  submitFriend = event => {
      const { name, age, email } = this.state;
      const newFriend = { name, age, email };
      console.log('before post request', newFriend);
      this.props.add_new_friend(newFriend); // add application state to component
      this.setState({
        name: '',
        age: '',
        email: ''
      });
  };

} // end AddFriend class

const mapStateToProps = state => {
    return {
      fetchFriends: state.fetchFriends,
      friends: state.friends,
      error: state.errorMessage,
    };
  };
  
  export default connect(mapStateToProps, { add_new_friend })(AddFriend);