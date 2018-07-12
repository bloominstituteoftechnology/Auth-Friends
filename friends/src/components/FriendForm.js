import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, changeFriendData } from '../actions';

class FriendForm extends Component {
  
  submitFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.props.friend);
  }

  handleInputChange = e => {
    const friend = Object.assign({}, this.props.friend);
    friend[e.target.name] = e.target.value;
    this.props.changeFriendData(friend);
  };

  render() {
    return (
      <form className="friend-form" onSubmit={this.submitFriend}>
        <input id="name" name="name" onChange={this.handleInputChange} type="text" placeholder="Name" value={this.props.friend.name} />
        <input id="age" name="age" onChange={this.handleInputChange} type="text" placeholder="Age" value={this.props.friend.age}  />
        <input id="email" name="email" onChange={this.handleInputChange} type="text" placeholder="Email" value={this.props.friend.email}  />
        <button id="submit" type="submit">Add new friend</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    friend: state.friendsReducer.friend
  };
};

export default connect(mapStateToProps, { addFriend, changeFriendData })(FriendForm);