import React, { Fragment } from 'react'

const Friends = (props) => {
  return (
    <div>
      <h2>Friends Component</h2>
      { props.friends.map(friend => {
          return (
            <Fragment>
              <h3>{friend.name}</h3>
              <h5>{friend.age}</h5>
              <p>{friend.email}</p>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Friends
