import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div className="card" key={friend.id} id={friend.id}>
      <h3>{friend.name}</h3>
      <p>Age: {friend.age}</p>
      <p>email: {friend.email}</p>
      <div onClick={console.log('handleDeleteClick')} className="delete">
        X
      </div>
      <button onClick={console.log('handleUpdateClick')} className="btn">
        Edit
      </button>
    </div>
  );
};

export default Friend;
