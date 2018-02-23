import React from 'react';

function Friends(props) {
  return (
    <ul>
      { props.loaded ?
        <div>
          { props.friends.map((friend, index) => {
            return (
              <li key={index}>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
                <button onClick={() => props.toggleEdit(index, friend.name, friend.age, friend.email)}>Edit</button>
                <button onClick={() => props.removeFriend(index)}>Remove</button>
              </li>
            );
          })}
        </div>
        :
        <div>
          Loading...
        </div>
    }
    </ul>
  );
}

export default Friends;