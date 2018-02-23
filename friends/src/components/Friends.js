import React from 'react';

const Friends = props => {
    return (
        <ul>
            {props.friends.map(friend => {
                return <li key={friend}>{friend}</li>;
            })}
        </ul>
    );
};

export default Friends;