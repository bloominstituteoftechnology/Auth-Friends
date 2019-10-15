import React from 'react'

const Friend = (props) => {
return(
  <div>
    <p>{props.name} Age: {props.age}</p>
    <p>{props.email}</p>
  </div>
  )
}
export default Friend
