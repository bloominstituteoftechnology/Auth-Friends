import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Friend = (props) => (
  <div className='Friend'>
    {props.name}
    {props.age}
    {props.email}
    <Link to={`/edit/${props.id}`}><button>Edit</button></Link>
    <button onClick={() => props.deleteFriend(props.id)}>Delete</button>
  </div>
)

export default Friend