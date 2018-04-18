import React from 'react'

const Friend = (props) => (
  <div className='Friend'>
    {props.name}
    {props.age}
    {props.email}
  </div>
)

export default Friend