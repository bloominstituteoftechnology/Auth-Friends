import React from 'react';
import PropTypes from 'prop-types';

import Friend from './friend';

const FriendsList = (props) => {
    return (
        <div>
            <p>friends list</p>
            <Friend />
        </div>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })).isRequired
};

export default FriendsList;
