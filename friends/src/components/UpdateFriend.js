import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFriend } from '../actions/friendsActions'

class UpdateFriend extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      nickname: '',
      description: '',
      img:'',
    }
  }

  componentDidMount(){
    const { friends, match } = this.props 
    const friend = friends.find( item => item.id === Number(match.params.id))
    this.setState(friend)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.updateFriend(this.state)
  }
  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="nickname" value={this.state.nickname} onChange={this.inputHandler} placeholder="Nickname"/>
        <input type="text" name="description" value={this.state.description} onChange={this.inputHandler} placeholder="Description"/>
        <input type="text" name="img" value={this.state.img} onChange={this.inputHandler} placeholder="Image URL"/>
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
export default connect(mapStateToProps, { updateFriend })(UpdateFriend)