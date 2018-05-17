import React from 'react';

const Friends = props => {
    return (
        <div>
            {props.friends.map(friend => <div key={friend.name + friend.id}>{friend.name}</div>)   }
        </div>
    )
}

export default Friends;