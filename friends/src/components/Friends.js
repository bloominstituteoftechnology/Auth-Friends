import React from 'react';
import Friend from './Friend';

const Friends = props => {
    const friends = props.friends.slice().reverse();

    return (
        <div>
            {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>
    );
}

export default Friends;