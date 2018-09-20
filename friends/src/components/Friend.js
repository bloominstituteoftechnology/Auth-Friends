import React from 'react';

const Friend = props => {
  return (

  <React.Fragment>
    <h3>{props.info.name}</h3>
    <p> Get in touch at: <br></br> {props.info.email} </p>
  </React.Fragment>
)
}

export default Friend
