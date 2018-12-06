import React from 'react';
import Friend from './Friend';
import shortid from 'shortid';

const FriendList = props => {
    console.log(props);
    return (
        <ul>
            {props.friends.map(friend => {
                return <Friend key={shortid.generate()} friend={friend} />;
            })}
        </ul>
    );
};

export default FriendList;
