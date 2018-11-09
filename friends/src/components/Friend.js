import React from 'react';

export default (props) => (
    <ul>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
    </ul>
);