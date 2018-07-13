import React from 'react'

const Friend = (props) => {
  return (
    <div className='friendCard'>
      <h1>{props.friend.name}</h1>
    </div>
  )
}
export default Friend
