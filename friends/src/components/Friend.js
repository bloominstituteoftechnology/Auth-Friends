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
        <img className="friend-img" src={friend.img} />
        <div className="friend-info-container"> 
          <div className="top-bar">
            <Link className="update-friend" to={`/update/${friend.id}`}><i class="fas fa-edit"></i></Link>
            <p className="close-button" onClick={clickHandler}>X</p>
          </div>
          <div className="friend-info">
            <h2 className="friend-name">{friend.name}</h2>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
          </div>
        </div>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteFriend })(Friend)