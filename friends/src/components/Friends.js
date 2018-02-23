import React from 'react';

function Friends (props) {
  console.log('friends.js props', props);
  return (
    <ul>
      {props.friends.map((friend, index) => {
        return <div key={index}> 
          <li>Name: {friend.name}</li>
          <li>Age: {friend.age}</li>
          <li>Email: {friend.email}</li>
          <button onSubmit={props.delete()}>Delete Friend</button>
        </div>
      })}
    </ul>
  )
}

// const handleDelete = (index) => {
//   this.props.deleteFriend(index)
// }

export default Friends;