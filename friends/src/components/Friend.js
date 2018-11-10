import React from 'react'
import { connect } from 'react-redux'
import { deleteFriend } from '../actions/friendsActions'

const card = {
  border: '1px solid black',
  width: '50%',
  padding: '10px',
  margin: '10px auto'
}

const redx = {
  border: '1px solid black',
  borderRadius: '5px',
  color: 'red',
  float: 'right'
}

const Friend = props => {
  const { friend, deleteFriend } = props

  const clickHandler = () => {
    deleteFriend(friend.id)
  }

  return (
    <div style={card} key={friend.id} className="friend-card">
      <p style={redx} className="close-button" onClick={clickHandler}>X</p>
      <p>Id: {friend.id}</p>
      <h2>Name: {friend.name}</h2>
      <h4>Age: {friend.age}</h4>
      <p>E-mail: {friend.email}</p>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteFriend })(Friend)

