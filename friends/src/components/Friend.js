import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Form from './Form';
import { getFriend, editFriend, deleteFriend } from '../actions';

class Friend extends React.Component {
  state = {
    isEditing: false,
    name: '',
    age: '',
    email: ''
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.getFriend();
  }

  toggleEditMode = e => {
    e.preventDefault();

    this.setState({ isEditing: true });
  }

  handleEditCancel = e => {
    e.preventDefault();

    this.setState({ isEditing: false });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditFriend = e => {
    e.preventDefault();

    this.props.editFriend();
  }

  handleDelete = e => {
    e.preventDefault();

    this.props.deleteFriend();
  }

  render() {
    if (!this.props.friend) {
      return (
        <div>Loading friend...</div>
      )
    }

    if (this.state.isEditing) {
      return (
        <Form name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              handleInputChange={this.handleInputChange}
              handleCancel={this.handleEditCancel}
              handleSmurfSubmit={this.handleEditFriend}/>
      )
    }

    return (
      <div className="friend-page">
        <h3>{this.state.name}</h3>
        <h3>{this.state.age}</h3>
        <h3>{this.state.email}</h3>
        <div className="buttons-container">
          <button onClick={this.toggleEditMode}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    friend: dispatch.friendsReducer.friend
  }
}

export default connect(mapDispatchToProps, { getFriend, editFriend, deleteFriend })(Friend);
