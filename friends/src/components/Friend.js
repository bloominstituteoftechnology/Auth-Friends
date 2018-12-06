import React from 'react';

const Friend = props => {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <h4>{props.friend.age}</h4>
            <h4>{props.friend.email}</h4>
        </div>
    )
};


export default Friend;