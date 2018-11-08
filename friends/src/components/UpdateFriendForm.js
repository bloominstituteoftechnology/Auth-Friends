import React from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../actions/index';

class updateFriendForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    const friend = this.props.friends.find( friend => friend.id === Number(this.props.match.params.id))
    this.setState(friend)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.updateFriend(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name" />
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age" />
        <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { updateFriend })(updateFriendForm)