import React from 'react';
import Friend from './Friend';

export default function FriendList (props) {
    return(
        props.friends.map(friend => <Friend key={friend.id} friend={friend}/>)
    );
}
