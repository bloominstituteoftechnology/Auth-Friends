import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createFriend } from '../actions/friendsActions'

class CreateFriend extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }


  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createFriend(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
        <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email"/>
        <input type="text" name="img" value={this.state.img} onChange={this.inputHandler} placeholder="Image URL"/>
        <button className="submit-button" type="submit">Add Friend</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { createFriend: createFriend })(CreateFriend);