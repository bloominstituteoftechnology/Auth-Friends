import React from 'react';


const Friends = (props) => {
  return (
    <ul>
      {props.friends.map((friend, i) => {
        return <li key={i+'a'}> 
          <div className="friendName">{friend.name}</div>
          <div className="friendAge">{friend.age}</div>
          <div className="friendEmail">{friend.email}</div>
        </li>     
      })}
    </ul>
  );
}

export default Friends;
