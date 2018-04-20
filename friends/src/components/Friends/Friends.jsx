import React from 'react'
import PropTypes from 'prop-types'

export const Friends = ({ friends }) => (
  <div>
    {friends.map(friend => (
      <p key={friend.id}>
        Name: {friend.name} Age: {friend.age} email: {friend.email}
      </p>
    ))}
  </div>
)

Friends.propTypes = {
  friends: PropTypes.array
}
