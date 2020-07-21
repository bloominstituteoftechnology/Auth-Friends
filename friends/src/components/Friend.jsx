import React from 'react'
import { Card } from '@material-ui/core';

const Friend = props => {
  const { name, age, email } = props.data

  return (
    <Card variant="outlined">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </Card>
  )
}

export default Friend