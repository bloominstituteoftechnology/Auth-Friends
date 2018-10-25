import React from 'react';

const FriendList = props => {
  return (
      <div>
      {props.friends.map(item => {
                                   return(
                                       <div>
                                         <p>{item.name}</p>
                                         <p>{item.age}</p>
                                         <p>{item.email}</p>
                                       </div>
                                       )
                                 })}
      </div>
      );
};


export default FriendList
