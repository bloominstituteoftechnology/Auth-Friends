import React from 'react';

const FriendsList = (props) => {

    return (
        <div>
            {props.friends.map(friend => {
                return <div key={friend.id}>{friend.name}</div>
            })}
        </div>
    );
}

export default FriendsList;