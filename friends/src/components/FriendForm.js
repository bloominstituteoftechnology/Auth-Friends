import React from 'react'
const FriendForm = props => {
 
// Note to self, add state here for input field strings.
 return (
  <div>
  <form onSubmit={props.submitHandler}>
   <input
    type='text'
    name='name'
    value={props.name}
    onChange={props.inputHandler}
   />
    <input
    type='text'
    name='age'
    value={props.age}
    onChange={props.inputHandler}
   />
    <input
    type='text'
    name='email'
    value={props.email}
    onChange={props.inputHandler}
   />
   <button>
    Add Friend.
   </button>
  </form>
  </div>
 )
}
 


export default FriendForm