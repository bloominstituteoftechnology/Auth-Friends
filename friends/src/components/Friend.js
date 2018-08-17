import React from 'react';

export default function Friend(props) {
    return(
        <div>
            <p> Name:{props.friend.name} </p>
            <p> Age: {props.friend.age} </p>
            <p> Email: {props.friend.email} </p>
        </div>
    )
};