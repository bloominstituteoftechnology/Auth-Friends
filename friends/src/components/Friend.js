import React from 'react'
import { connect } from 'react-redux'
import { deleteFriend } from '../actions'

const Friend = (props) => {
  return (
    <div className='friendCard'>
      <h1>{props.friend.name}</h1>
      <p>
        <strong>Age</strong> {`: ${props.friend.age}`}
      </p>
      <span>
        <strong>Email</strong>
        {`: ${props.friend.email}`}
      </span>
      <button onClick={() => props.deleteFriend(props.friend.id)}>
        Delete
      </button>
    </div>
  )
}
export default connect(null, { deleteFriend })(Friend)
