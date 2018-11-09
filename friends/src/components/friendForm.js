import React, { Component } from 'react';
import { GET_FRIENDS, CREATE_FRIEND } from '../actions/index';
import { connect } from 'react-redux';
import { createFriend } from '../actions/index'


class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: ''

    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    let newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.props.createFriend(newFriend)

  }
  render() {
    return (
      <div>
        <h1>Friend Form Here</h1>
        <form onSubmit={this.submitHandler}>
          <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"></input>
          <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="age"></input>
          <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
          <button>Submit</button>
        </form>

      </div>
    )
  }
}
const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, { createFriend })(FriendForm);
