import React from 'react'
import Friend from './Friend'
import { connect } from 'react-redux'

class FriendContainer extends React.Component {
 
 render(){
  return(
   <div>
   <Friend />
   </div>
  )
 }
}

const mapStateToProps = (state) => {
 return {}
}
export default connect('', mapStateToProps)(FriendContainer)