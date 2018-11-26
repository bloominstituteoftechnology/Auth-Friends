import React from 'react'

import { updateFriend } from '../actions/actions'

import { connect } from 'react-redux'

class Friend extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   newname: '',
   newage: '',
   newemail: ''

  }
 }

 updateHandler = event => {
  this.setState({
   [event.target.name]: event.target.value 
  })
 }

 friendUpdate = (id, updatedFriend) => {
  this.props.updateFriend(id, updatedFriend)
  console.log(updatedFriend)
 }


 render() {
  return (
   <div>
    <h1>
    {this.props.name}
    </h1>
    <h2>
    {this.props.age}
    </h2>
    <h3>
    {this.props.email}
    </h3>
    <form onSubmit={() => this.friendUpdate(this.props.id, {name: this.state.newname, 
   age: this.state.newage, 
   email: this.state.newemail}
   )}>
     <input
      type='text'
      name='newname'
      value={this.state.newname}
      onChange={this.updateHandler}
       />
     <input
      type='text'
      name='newage'
      value={this.state.newage}
      onChange={this.updateHandler}
       />
     <input
      type='text'
      name='newemail'
      value={this.state.newemail}
      onChange={this.updateHandler}
       />
     <button>
     Update Friend.
     </button>
    </form>
   </div>
  );
 }
}




export default connect("", {updateFriend})( Friend)