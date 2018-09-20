import React from 'react';
import PropTypes from 'prop-types';

import Friend from './Friend';

// Returns the individual Friend data
function FriendsList(props) {
    if (!props.friendsList || !props.friendsList.length) {
        return <h1>No Friends...</h1>
    }

    return (
        <div>
            {props.friendsList.map(friend => (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </div>
    );
};

export default FriendsList;