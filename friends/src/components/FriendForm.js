import React from 'react'
import { reducer } from '../actions/actions'
class FriendForm extends React.Component {
 constructor(){
  super()
  this.state = {
   name: '',
   age: '',
   email: '',
   friends: []
  }
 }
 
componentDidMount(){
 reducer()
}
 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value 
  })
 }

 submitHandler = event => {
  event.preventDefault()
 

 }
// Note to self, add state here for input field strings.
render(){
 return (
  <div>
  <form onSubmit={this.submitHandler}>
   <input
    type='text'
    name='name'
    value={this.state.name}
    onChange={this.inputHandler}
   />
    <input
    type='text'
    name='age'
    value={this.state.age}
    onChange={this.inputHandler}
   />
    <input
    type='text'
    name='email'
    value={this.state.email}
    onChange={this.inputHandler}
   />
   <button>
    Add Friend.
   </button>
  </form>
  </div>
 )
}
 
}

export default FriendForm