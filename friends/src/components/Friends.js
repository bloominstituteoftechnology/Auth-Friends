import React from 'react'

const Friends = (props) => {
  return (
    <div>
      <h2>Friends Component</h2>
      { props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <h3>{friend.name}</h3>
              <h5>{friend.age}</h5>
              <p>{friend.email}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Friends
