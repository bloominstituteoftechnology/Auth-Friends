import React from 'react';

const FriendsCard = (props) => {
    return (
        <>
        {props.friends.map(friend => {
            return (
                <>
                <h1>{friend.name}</h1>
                <h1>{friend.age}</h1>
                <h1>{friend.email}</h1>
                </>
            )
        })}
        </>
    )
}
export default FriendsCard;