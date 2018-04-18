import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFriend, updateFriend } from '../actions'

class FriendForm extends Component {
  state = this.props.currentFriend || {
    name: '',
    age: '',
    email: ''
  }

  buttonText = () => this.props.updatingFriend
    ? 'Update Friend'
    : 'Create Friend'
  
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => e.preventDefault() && this.props.updatingFriend
    ? this.props.updateFriend(this.state)  
    : this.props.createFriend(this.state)

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          placeholder="Friend's name"
          value={this.state.name}
          onChange={this.handleChange} />
        <input
          name='age'
          placeholder="Friend's age"
          value={this.state.age}
          onChange={this.handleChange} />
        <input
          name='email'
          placeholder="Friend's email"
          value={this.state.email}
          onChange={this.handleChange} />
        <button type='submit'>
          {this.buttonText()}
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  updatingFriend: state.updatingFriend,
  currentFriend: state.currentFriend
})

const mapDispatchToProps = {
  createFriend,
  updateFriend
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendForm)