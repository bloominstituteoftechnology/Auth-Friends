import React from 'react'
import Friends from './Friends'
import { connect } from 'react-redux'
import { addFriend, deleteFriend } from '../actions/actions'
class FriendContainer extends React.Component {
 constructor(props){
  super(props)
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
  this.props.addFriend({name: this.state.name, age: this.state.age, email: this.state.email})
 }
 
 deleteHandler = id => {
  this.props.deleteFriend(id)
 }
 render(){
  return(
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
    <Friends friends={this.props.friends} deleteHandler={this.deleteHandler} />
   </div>
  )
 }
}

const mapStateToProps = state => {
 const { friends } = state
 return {
  friends: friends
 }
}



export default connect(mapStateToProps, { addFriend, deleteFriend })(FriendContainer)