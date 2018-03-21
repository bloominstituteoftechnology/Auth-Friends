import React from 'react';

const friends = props => {
    return props.friends.map((friend, i) => {
        return (
            <ul key={i}>
            <li>{friend.name}</li>
            <li>{friend.age}</li>
            <li>{friend.email}</li>
            </ul>
        );
    });
};

export default friends;