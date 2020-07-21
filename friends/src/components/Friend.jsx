import React from 'react'

const Friend = props => {
  const { name, age, email } = props.data

  return (
    <>
      <p>Name: {name}, Age: {age}, Email: {email}</p>
    </>
  )
}

export default Friend