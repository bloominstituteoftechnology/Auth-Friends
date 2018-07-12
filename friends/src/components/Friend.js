import React from 'react'

export default ({ friend }) => {
  return (
    <li>Name: {friend.name}, Age: {friend.age}, Email: {friend.email}</li>
  )
}
