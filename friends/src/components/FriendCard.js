import React from 'react';

export default function FriendCard(props) {
    return (
        <div className="friendcard">
            <p>{props.friend.name}</p>
        </div>
    );
}