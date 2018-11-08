import React from 'react'
import { Link } from 'react-router-dom'
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
      <h2>{friend.name}</h2>
      <h4>{friend.nickname}</h4>
      <p>{friend.description}</p>
      <img src={friend.img} />
      <Link to={`/update/${friend.id}`}>Update</Link>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteFriend })(Friend)