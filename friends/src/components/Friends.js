import React from 'react'
import Friend from './Friend'

class Friends extends React.Component {
render(){
 return(
  <div>
 
  {this.props.friends.map((friend, index) => <Friend key={index}
   name={friend.name}
   age={friend.age}
   email={friend.email}
   id={friend.id}
   deleteHandler={this.props.deleteHandler}
   /> )}
    
  </div>
 )
}

}


export default Friends