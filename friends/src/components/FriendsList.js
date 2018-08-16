import React from 'react';
import Friend from './Friend';

export default FriendsList = props => {
    <ul>
        {props.friends.map(friend => (
            <Friend
                key={friend.id}
                friend={friend}
            />
        ))}
    </ul>
}