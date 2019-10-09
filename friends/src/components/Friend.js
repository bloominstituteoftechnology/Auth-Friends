import React from 'react'

const Friend = ({ banana }) => {
  return (
    <div>
      <h2>{banana.name}</h2>
      <p>Age: {banana.age}</p>
      <p>email: {banana.email}</p>
    </div>
  )
}

export default Friend;