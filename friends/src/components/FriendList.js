import React from 'react';
import Friends from './Friends'

const FriendList = props => {
    return (
        <div>

        {props.friends.map(friend => {
        return <Friends key={friend.id} friend={friend} />
    })}
</div>
    )
}

export default FriendList;