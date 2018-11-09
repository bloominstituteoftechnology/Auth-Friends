import React from 'react';

export const Friend = props => {
    const { friend } = props
    return (
        <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}