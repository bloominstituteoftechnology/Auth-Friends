import React from 'react';
import { Fragment } from 'react'

export const Friend = (props) => {
  return (
    <Fragment>
      <h2>My name is: {props.friend.name}</h2>
      <h4>I am: {props.friend.age}</h4>
      <h4>Contact me at: {props.friend.email}</h4>      
    </Fragment>
  )
}