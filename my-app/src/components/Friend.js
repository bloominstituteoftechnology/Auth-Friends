import React from 'react'

const Friend = ({ friend }) => {
  return (
    <div>
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>email: {friend.email}</p>
    </div>
  )
}

export default Friend; 