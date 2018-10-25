import React from 'react';

const Friend = props => {
    return (
        <div>
            <h3>{props.friends.name}</h3>
            <p>{props.friends.age}</p>
            <p>{props.friends.email}</p>
        </div>
    )
}

export default Friend;