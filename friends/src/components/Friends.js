import React from 'react';


const Friends = (props) => {
  return (
    <ul>
      {props.friends.map((friend, i) => {
        return <li key={i+'a'}> {friend.name} </li>
      })}
    </ul>
  );
}

export default Friends;