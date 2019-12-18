import React from 'react'

const Friend = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Age: {data.age}</p>
      <p>email: {data.email}</p>
    </div>
  )
}

export default Friend;