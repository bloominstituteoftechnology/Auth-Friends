import React from 'react'
import FriendForm from './FriendForm'

class Friend extends React.Component {
render(){
 return(
  <div>
   <FriendForm />
  </div>
 )
}

}

// const mapStateToProps = state => {
//  const { friends } = state.friends
//  return {
//   friends: friends
//  }
// }

// export default connect(mapStateToProps, handleFriends)(Friend) 

export default Friend