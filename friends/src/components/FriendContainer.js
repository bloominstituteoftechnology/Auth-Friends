import React from 'react'
import Friend from './Friend'

class FriendContainer extends React.Component {
 constructor(){
  super()
  this.state = {
   name: '',
   age: '',
   email: '',
  }
 }

 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value 
  })
 }

 submitHandler = event => {
  event.preventDefault()
 }
 
 render(){
  return(
   <div>
   <Friend
    name={this.state.name}
    age={this.state.age}
    email={this.state.email}
    inputHandler={this.inputHandler}
    submitHandler={this.submitHandler}
   />
   </div>
  )
 }
}

export default FriendContainer