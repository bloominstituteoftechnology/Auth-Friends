import React from 'react';
import Friend from './Friend.js'

const Friends = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div><Friend friend={friend}  key={friend.id}/></div>
                );
            })}
        </div>
    );
}

export default Friends;