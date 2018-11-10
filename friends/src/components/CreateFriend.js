import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createFriend } from '../actions/friendsActions'

const formStyle = {
  width: '70%',
  margin: '5px auto'
}

class CreateFriend extends Component {
  constructor(props){
    super(props)
    this.state = {
        id: '',
        name: '',
        age: '',
        email: ''
    }
  }


  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createFriend(this.state)
  }

  // updateHandler = (e) => {
  //   e.preventDefault()
  //   this.props.updateFriend(this.state)
  // }

  render(){
    return (
      <form onSubmit={this.submitHandler} style={formStyle}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
        <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email"/>
        <input type="text" name="id" value={this.state.id} onChange={this.inputHandler} placeholder="id"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { createFriend: createFriend })(CreateFriend);