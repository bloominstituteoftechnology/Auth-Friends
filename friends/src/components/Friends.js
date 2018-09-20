import React, { Fragment } from 'react';

export default function Friends(props) {
    return (
        <ul>
            {props.friends.map((friend, index) => (
                <li key={index}>{friend.name}</li>
            ))}
        </ul>
    )
}