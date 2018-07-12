import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import FriendForm from './FriendForm';

class Friend extends Component {
  constructor(props) {
    super(props);
    const { friend } = props;
    this.state = {
      name: friend.name,
      age: friend.age,
      email: friend.email,
      isEditing: false,
    };
    this.id = friend.id;
    this.handleFriendFormSubmit = this.handleFriendFormSubmit.bind(this);
  }

  editFriend = () => {
      this.setState({isEditing: !this.state.isEditing});
  };

  handleFriendFormSubmit = (e) => {
      e.preventDefault();
      const {isEditing, ...rest} = this.state;
      let updatedFriend = {id: this.id, ...rest};
      this.props.updateFriend(updatedFriend);
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
            handleSubmit={this.handleFriendFormSubmit}
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

// const mapStateToProps = (state, ownProps) => ({
  
// });

export default connect(null, actions)(Friend);
