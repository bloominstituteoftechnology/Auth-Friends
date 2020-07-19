import React from 'react';

const Friend = ({ friend }) => {
    return (
        <div>
            <h3>{friend.name}</h3>
            <h3>{friend.email}</h3>
            <h3>{friend.age}</h3>
        </div>
    );
};

export default Friend;