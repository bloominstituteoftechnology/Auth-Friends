import React from 'react';

function Friends(props) {
  return (
    <ul>
      { props.loaded ?
        <div>
          { props.friends.map(friend => {
            return (
              <li key={friend.id}>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
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