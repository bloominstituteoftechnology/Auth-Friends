import React from 'react';
import PropTypes from 'prop-types';

import Friend from './Friend';

// Returns the individual Friend data
function FriendsList(props) {
    console.log(props);
    if (!props.friendsList || !props.friendsList.length) {
        return <h1>No Friends...</h1>
    }

    return (
        <div>
            {props.friendsList.map(friend => (
                <Friend key={friend.id} friend={friend} handleDelete={props.handleDelete} toggle={props.toggle} modal14={props.modal14}/>
            ))}
        </div>
    );
};

export default FriendsList;