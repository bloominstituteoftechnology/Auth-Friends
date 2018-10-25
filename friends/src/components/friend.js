import React from "react";

const Friend = props => {
  return (
    <div className='contact-card'>
      <h3>{props.friend.name}</h3>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
      <button 
        onClick={() => props.deleteFriend()}>DELETE</button>
    </div>
  )       
};

export default Friend;
