import React from "react";
import Friend from "./Friend";

// let nextId = 0;

// const FriendList = props => {
//   return (
//       <ul>
//         {props.friends.map(friend => {
//           return <Friend key={friend.name} id={nextId++} friend={friend} />
//         })}
//       </ul>
//   );
// };

const FriendList = props => {
  return (
      <ul>
        {props.friends.map(friend => {
          return <Friend friend={friend} />
        })}
      </ul>
  );
};

export default FriendList;