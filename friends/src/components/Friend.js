import React from 'react';

const Friends = props => {
    return (
        <div className='friend-container'>
            <p>{props.friend.name}</p>
            <p>{props.friend.email}</p>
            <p>{props.friend.age}</p>
        </div>
    );
}

export default Friends;