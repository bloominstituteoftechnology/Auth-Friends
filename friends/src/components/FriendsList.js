import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, updateFriend, editingFriend } from '../actions';

class FriendsList extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  toggleEdit = () => {
    this.props.editingFriend();
  }

  handleEditFriend = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
      }
    );
  }

  handleNameChange = (event) => {
    this.setState({
        name: event.target.value,
    });
  }

  handleAgeChange = (event) => {
    this.setState({
        age: event.target.value,
    });
  }

  handleEmailChange = (event) => {
    this.setState({
        email: event.target.value,
      });
  }

  render() {
    return (
      <ul>
        {this.props.friends.map((friend, index) => {
          return (
          <li key={index}>
            {this.props.updatingFriend ? <input value={this.state.name} onChange={this.handleNameChange} /> : friend.name} <br />
            {this.props.updatingFriend ? <input value={this.state.age} onChange={this.handleAgeChange} /> : friend.age}<br />
            {this.props.updatingFriend ? <input value={this.state.email} onChange={this.handleEmailChange} /> : friend.email}<br />
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
