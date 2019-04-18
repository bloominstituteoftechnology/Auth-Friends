import React from 'react'

export default function Friend(props) {
  return (
    <div>
      <p>{props.data.name}</p>
      <p>{props.data.age}</p>
      <p>{props.data.email}</p>
    </div>
  )
}
