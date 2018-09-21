import React, { Fragment } from 'react';

import Friend from './Friend';

export default function Friends(props) {
    return (
        <ul>
            {props.friends.map((friend, index) => (
                <li key={index}>
                <Friend friend={friend} />
                </li>
            ))}
        </ul>
    )
}