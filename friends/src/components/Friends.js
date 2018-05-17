import React from 'react';

const Friends = props => {
    return (
        <div>
            {props.friends.map(friend => 
                <div key={friend.name + friend.id}>
                    {friend.name} {friend.age} {friend.email}
                </div>)
            }
        </div>
    )
}

export default Friends;