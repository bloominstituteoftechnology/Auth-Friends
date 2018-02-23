import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, updateFriend, editingFriend } from '../actions';

class FriendsList extends React.Component {
  state = {
    updatedFriend: {
      name: '',
      age: '',
      email: '',},
  };

  toggleEdit = () => {
    this.props.editingFriend();
  }

  handleEditFriend = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      updatedFriend: {
        name: '',
        age: '',
        email: '',},
    });
  }

  handleNameChange = (event) => {
    this.setState({
      updatedFriend: {
        name: event.target.value,
      }
    });
  }

  handleAgeChange = (event) => {
    this.setState({
      updatedFriend: {
        age: event.target.value,
      }
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      updatedFriend: {
        email: event.target.value,
      }
    });
  }

  render() {
  return (
    <ul>
      {this.props.friends.map((friend, index) => {
        return (
        <li key={index}>
          {this.state.editing ? (<h1>Fetching friends</h1>) : friend.name} <br />
          {friend.age} <br />
          {friend.email} <br />
          <button onClick={() => {this.props.deleteFriend(index)}}>Delete</button>

          {this.props.updatingFriend 
          ? <button onClick={() => {this.props.updateFriend(index)}}>Save</button>
          : <button onClick={() => {this.toggleEdit()}}>Edit</button>}
        </li>
        )
      })}
    </ul>
  )}
}

const mapStateToProps = state => {
  return {
    updatingFriend: state.updatingFriend,
  }
}

export default connect(mapStateToProps, { deleteFriend, updateFriend, editingFriend })(FriendsList)
