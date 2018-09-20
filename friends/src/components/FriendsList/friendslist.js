import React from 'react';
import PropTypes from 'prop-types';

import Friend from './friend';

const FriendsList = (props) => {
    return (
        props.postingFriend || props.gettingFriends || props.puttingFriend || props.deletingFriend ? 
            <p>Getting friends. Please wait. :)</p> 
        : 
            <div>
                {props.friends.map( (friend) => 
                    <Friend 
                        friend={friend} 
                        editHandler={props.editHandler} 
                        deleteFriend={props.deleteFriend} 
                        key={friend.id} 
                    /> 
                )}
            </div>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })).isRequired,
    editHandler: PropTypes.func,
    postingFriend: PropTypes.bool.isRequired,
    gettingFriends: PropTypes.bool.isRequired,
    // gettingSingleFriend: PropTypes.bool, 
    puttingFriend: PropTypes.bool.isRequired,
    deletingFriend: PropTypes.bool.isRequired
};

export default FriendsList;
