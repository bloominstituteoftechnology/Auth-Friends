import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return(
        <div>
            <ul>
                {props.friends.map((friend, index) => {
                    return <Friend id={friend.id} friend={friend} key={index} />
                })}
            </ul>
        </div>
    )
}

export default FriendsList;