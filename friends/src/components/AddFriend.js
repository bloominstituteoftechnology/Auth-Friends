import React, { Component } from 'react';

class AddFriend extends Component {
    state = {
        newFriendName: null,
        newFriendAge: null,
        newFriendEmail: null
    }


  render() {
    return (
        <form>
          <fieldset>
            <legend>Add Friend Form</legend>
            <label>name:</label>
              <input
                type='text'
                value={this.state.newFriend}
                onChange={this.handleNewInput}
              />
              <label>age:</label>
              <input
                type='number'
                value={this.state.newFriendAge}
                onChange={this.handleNewInput}
              />
              <label>email:</label>
              <input
                type='email'
                value={this.state.newFriendEmail}
                onChange={this.handleNewInput}
              />
              <button onClick={this.submitFriend}>Submit New Friend</button>
          </fieldset>
        </form>
    );
  }

  // submitFriend() resets form so a new friend can be added and
  // sends formData to application state
  submitFriend = event => {
      event.preventDefault();
      this.props.add_new_friend(this.state); // add application state to component
      this.setState({
        newFriendName: null,
        newFriendAge: null,
        newFriendEmail: null
      });
  };

} // end AddFriend class


export default AddFriend;