import React from 'react'

const Friend = (props) => {
    console.log(props.friend)
  return (
      <div>
    <div>
        <h1>{props.friend.name}</h1>
    </div>
    <div>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
    </div>
    </div>
  )
}
export default Friend;