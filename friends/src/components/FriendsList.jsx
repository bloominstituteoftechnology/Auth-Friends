import React from 'react';

const FriendList = (props) => {
  const friends = props.friends.slice(); 
  return (
    <div className="friends-container">
        
          {friends.map(friend => <div className={"friend"} key={friend.id} friend={friend} >
            {/* Friend's Info Here */}
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>)}

        </div>
   );
}
 
export default FriendList;