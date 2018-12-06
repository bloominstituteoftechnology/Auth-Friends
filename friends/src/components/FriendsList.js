import React from 'react';

const FriendsList = props => {
    return(
        <div>
            {props.friends.friends.map((friend) => {
                return <p key={friend.id}>{friend.name}</p>
            })}
        </div>
    );
}


export default FriendsList;