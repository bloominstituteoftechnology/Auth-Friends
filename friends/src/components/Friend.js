import React from 'react';

export default function Friend(props) {
    return (
        <div>
        <h2>{props.friend.name}</h2>
        <h3>{props.friend.age}</h3>
        <h4>{props.friend.email}</h4>
        </div>
    )
}