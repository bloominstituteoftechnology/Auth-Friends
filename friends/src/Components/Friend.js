import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update, deleteFriend } from '../Actions';

class Friend extends Component {
  constructor() {
    super();
    this.state = {
      editingId: null,
      id: null,
      name: '',
      age: '',
      email: ''
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  editFriend = (id, name, age, email) => {
    this.setState(() =>({
      editingId: id,
      id: id,
      name: name,
      age: age,
      email: email

    }))
  }

  editSubmit = event => {
    event.preventDefault();
    let targetId = Number(event.target.id)
    const { id, name, age, email } = this.state;
    let editedFriend = { id, name, age, email }

    if (editedFriend) {
      this.props.friends.map(friend => {
        if (friend.id === targetId) {
          this.props.update(editedFriend)
    }
  })
  this.setState(() => ({
    editingId: null,
    id: null,
    name: '',
    age: '',
    email: ''
      }))
    }
  }

  deleteFriend = event => {
    let id = Number(event.target.id);
      this.props.friends.map(friend => {
        if (friend.id === id) {
          this.props.deleteFriend(id)
        }
      })
    }

  render() {
    const { id, name, age, email } = this.props.friend
    return (
      <div className="friend-card">

        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Email: {email}</div>

        <div className='friend-btns'>
          <button className='btn' onClick={() => this.editFriend(id, name, age, email)}>edit</button>
          <button className='btn' id={id} onClick={this.deleteFriend}>delete</button>
        </div>

        <div className={this.state.editingId === id ? 'edit-form' : 'hidden'}>Update Friend
          <form className='form' id={id} onSubmit=  {this.editSubmit}>
            <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name' required></input>
            <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age' required></input>
            <input name='email' value={this.state.email} onChange={this.changeHandler} type='text' placeholder='Email' required></input>
            <input className='submit' type='submit' value='submit'/>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { update, deleteFriend })(Friend);