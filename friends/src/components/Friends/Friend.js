import React from 'react';

const Friend = (props) => {
  const { id, name, age, email } = props.friend
  return(
    <div className='single-friend' id={id}>
      <h4>Name: </h4> {name}
      <h4>Age: </h4> {age}
      <h4>Email: </h4> {email}
    </div>
  )
}

export default Friend;