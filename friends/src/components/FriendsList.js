import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends }) => {
    return (
        <div>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default FriendsList;