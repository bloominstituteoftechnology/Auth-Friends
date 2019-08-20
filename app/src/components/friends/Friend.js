import React from 'react';

const Friend = ({ friend, deleteFriend }) => {

  return (
    <div style={{textAlign: 'center', margin: '20px',border: '0.2px solid gray'}}>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
    </div>
  )
}

export default Friend;