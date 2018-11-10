import React from 'react'
import { connect } from 'react-redux'
import { deleteFriend } from '../actions/friendsActions'

const Friend = props => {
  const { friend, deleteFriend } = props

  const clickHandler = () => {
    deleteFriend(friend.id)
  }

  return (
    <div key={friend.id} className="friend-card">
      <p className="close-button" onClick={clickHandler}>X</p>
      <h2>Name: {friend.name}</h2>
      <h4>Age: {friend.age}</h4>
      <p>E-mail: {friend.email}</p>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteFriend })(Friend)

