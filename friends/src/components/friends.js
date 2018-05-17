import React from 'react';
import { Media } from 'reactstrap';


const Friends = (props) => {
  return(
    <div>
    {props.friendData.map((friend) => {
      return (
        <div>{friend.name}</div>
      );
    })}
    </div>
  );
}



export default Friends;
