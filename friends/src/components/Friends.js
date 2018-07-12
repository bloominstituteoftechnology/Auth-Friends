import React from 'react';
import Friend from './Friend';

const Friends = props => {
    const friends = props.friends.slice().reverse();
    return (
        <div className='friends-container'>
            {friends.map(friend => <Friend key={friend.id} friend={friend} onRef={props.onRef} deleteFriend={props.deleteFriend} setName={props.setName} />)}
        </div>
    );
}

export default Friends;