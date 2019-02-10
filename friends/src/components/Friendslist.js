import React from 'react';
import Friend from './Friend';


const FriendsList = props => {
    return(
        <div className="friend-list container">
            {props.friends.map((friend, index) => {
                return <Friend id={friend.id} friend={friend} key={index} />
            })}
        </div>
    )
}

export default FriendsList;