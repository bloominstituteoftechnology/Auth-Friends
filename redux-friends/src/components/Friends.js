import React from 'react';
import Friend from './Friend';

const Friends = props => {
    return(
        <div>
            <h1>Friends List</h1>
            {props.friends.map(friend => <Friend id={friend.id} friend={friend}/> )}
        </div>
    )
}

export default Friends