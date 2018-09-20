import React from 'react';
import Friend from './Friend';

export default function FriendsList(props){
    return(
        <ul>
            {props.friends.map(friend => (
                <Friend
                    key={friend.name}
                    name={friend.name}
                    age = {friend.age}
                    email = {friend.email}
                    id={friend.id}
                />
            ))}
        </ul>
)} 