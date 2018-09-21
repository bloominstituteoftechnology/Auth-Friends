import React from 'react';
import PropTypes from 'prop-types';

import Friend from './friend';

const FriendsList = (props) => {
    return (
        props.crudStates.postingFriend || props.crudStates.gettingFriends || props.crudStates.puttingFriend || props.crudStates.deletingFriend /* || props.crudStates.gettingSingleFriend */ ? 
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
    deleteFriend: PropTypes.func, 
    crudStates: PropTypes.shape({
        postingFriend: PropTypes.bool.isRequired,
        postedFriend: PropTypes.bool, 
        gettingFriends: PropTypes.bool.isRequired,
        gotFriends: PropTypes.bool, 
        // gettingSingleFriend: PropTypes.bool.isRequired,
        // gotSingleFriend: PropTypes.bool, 
        puttingFriend: PropTypes.bool.isRequired,
        putFriend: PropTypes.bool, 
        deletingFriend: PropTypes.bool.isRequired,
        deletedFriend: PropTypes.bool
    })
};

export default FriendsList;
