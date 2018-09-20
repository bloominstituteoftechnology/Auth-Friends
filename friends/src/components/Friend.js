import React from 'react';

const Friend = props => {
  return (

  <React.Fragment>
    <h3>{props.info.name}</h3>
    <p> They just turned {props.info.age} </p>
    <p> Say happy birthday at: <br></br> {props.info.email} </p>
  </React.Fragment>
)
}

export default Friend
