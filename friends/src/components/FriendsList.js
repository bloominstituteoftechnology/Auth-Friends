import React from 'react';
import Friend from './Friend';

export default function FriendsList(props){
    return(
        <ul>
            {props.friends.map(friend => (
                <Friend
                    key={friend.id}
                    friend={friend}
                />
            ))}
        </ul>
)}