import React from 'react';
import FriendList from './FriendList'

const Friends = props => {
    return(
        <div className="friends">
            <FriendList friend={props.friends}/>
        </div>
    )
}

export default Friends;