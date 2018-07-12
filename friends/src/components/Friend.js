import React, { Component } from 'react';
import FriendForm from './FriendForm';

export default class Friend extends Component {
  constructor(props) {
    super(props);
    const { friend } = props;
    this.state = {
      name: friend.name,
      age: friend.age,
      email: friend.email,
      isEditing: false,
    };
    this.handleFriendForm = this.handleFriendForm.bind(this);
  }

  editFriend = () => {
      this.setState({isEditing: !this.state.isEditing});
  };

  handleFriendForm = (e) => {
      e.preventDefault();
      const {isEditing, ...rest} = this.state;
      let updatedFriend = Object.assign({id: this.props.id}, rest);
      this.props.handleFriendUpdate(updatedFriend);
      this.setState({isEditing: false});
  };

  handleInput = e => {
    let fieldName = e.target.name;
    let value = e.target.value;
    if (fieldName === 'age') value = parseInt(value, 10);
    this.setState({ [fieldName]: value });
  };

  presentEdit = () => {
      if (!this.state.isEditing) return null;
      return (
        <FriendForm
            nameInput={this.state.name}
            ageInput={this.state.age}
            emailInput={this.state.email}
            handleInput={this.handleInput}
            handleFriendForm={this.handleFriendForm}
        />
      );
  }
  render() {
    const { friend } = this.props;
  return (
    <li>
      <div>{`${friend.name}, age: ${friend.age}, email: ${friend.email}`}</div>
      <button onClick={this.editFriend}>Edit</button>
      <button onClick={() => {this.props.handleDeleteFriend(this.props.id)}}>Delete</button>
      {this.presentEdit()}
    </li>
  
  )};
}
