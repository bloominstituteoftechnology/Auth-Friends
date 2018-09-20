import React from 'react';
import DeleteFriend from './DeleteFriend'

const Friend = props => {
  return (

  <React.Fragment>
    <h3>{props.info.name}</h3>
    <p> They just turned {props.info.age} </p>
    <p> Say happy birthday at: <br></br> {props.info.email} </p>
    <DeleteFriend handleClick={props.handleClick} id={props.info.id} />
  </React.Fragment>
)
}

export default Friend
