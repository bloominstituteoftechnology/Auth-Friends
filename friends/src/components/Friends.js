import React from 'react';

const Friends = props => {
    console.log(props.friends)
    return (
        props.friends.map(friend => {
            return <p key={friend.id}>{friend.name}</p>
        })
    )
}

export default Friends;