import React from 'react';
// import PropTypes from 'prop-types';
// import Friend from './Friend';

const FriendList = ({ friends }) => {

    <ul>
        {friends.map(friend =>
            <Friend
            key= {friend=id}
            {...friend}
            />)}
    </ul>
}

// FriendList.propType = {

// }

export default FriendList