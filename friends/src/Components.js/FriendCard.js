import React from 'react';

const FriendCard = ({NewFriend}) => {
    return (
        <div>
            <h1>{NewFriend.name}</h1>
            <p>{NewFriend.age}</p>
            <p>{NewFriend.email}</p>
        </div>
    )
}

export default FriendCard;