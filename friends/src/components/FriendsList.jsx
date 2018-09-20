import React from 'react';

const FriendList = (props) => {
  return ( 
    <div className="friends-container">
        
          {props.friendsList.map(friend => <div className={"friend"} key={friend.id} friend={friend} >
            {/* Friend's Info Here */}
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>)}

        </div>
   );
}
 
export default FriendList;