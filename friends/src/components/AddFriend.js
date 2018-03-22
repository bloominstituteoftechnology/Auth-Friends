import React, { Component } from 'react';

class AddFriend extends Component {
    state = {
        newFriendName: '',
        newFriendAge: '',
        newFriendEmail: ''
    };


  render() {
    return (
        <form type='submit'>
          <fieldset>
            <legend>Add Friend Form</legend>
            <label>name:</label>
              <input
                type='text'
                name='newFriendName'
                value={this.state.newFriendName}
                onChange={this.handleNewInput}
              />
              <label>age:</label>
              <input
                type='number'
                name='newFriendAge'
                value={this.state.newFriendAge}
                onChange={this.handleNewInput}
              />
              <label>email:</label>
              <input
                type='email'
                name='newFriendEmail'
                value={this.state.newFriendEmail}
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
      event.preventDefault();
      const { name, age, email } = this.state;
      const newFriend = { name, age, email };
      this.props.add_new_friend(newFriend); // add application state to component
      this.setState({
        newFriendName: '',
        newFriendAge: '',
        newFriendEmail: ''
      });
  };

} // end AddFriend class


export default AddFriend;