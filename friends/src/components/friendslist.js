import React from 'react';
import Friend from './friends';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friends => {
                return <Friend key = {friends.id} friend = {friend} />
            })}
        </div>
    )
}

export default FriendsList