import React from 'react';
import FriendCard from './FriendCard';

export default function FriendsList(props) {
    return (
        <div className="friendslist">
            {props.friends.map(friend =>
                <FriendCard
                    friend={friend} />)}
        </div>
    );
}