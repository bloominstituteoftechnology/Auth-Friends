import React from 'react';

export default (props) => (
    <div>
        <p>{props.friend.name}</p>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
    </div>
);