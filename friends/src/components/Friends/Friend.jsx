import React from 'react';

// Displays the Friend data onto the page
const Friend = (props) => {
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.age}</h2>
            <h2>{props.friend.email}</h2>
        </div>
    )
};

export default Friend;