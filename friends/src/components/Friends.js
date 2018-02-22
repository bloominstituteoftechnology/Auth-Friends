import React from 'react';

const Friends = props => {
    console.log('my props from cmoponene: ', props);
    return (
        <ul>
            {props.friends.map(friend => {
                return <li key={friend}>{friend}</li>;
            })}
        </ul>
    );
};

export default Friends;