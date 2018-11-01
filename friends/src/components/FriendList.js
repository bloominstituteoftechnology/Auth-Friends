import React from 'react';

const FriendList = props => {
    return (  
        <div>
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>

    );
}
 
export default FriendList