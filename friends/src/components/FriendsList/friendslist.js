import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Friend from './friend';

const ErrorP = Styled.p`
    color: #FF0000;
`;

const FriendsList = (props) => {
    return (
        props.crudStates.postingFriend || props.crudStates.gettingFriends || props.crudStates.puttingFriend || props.crudStates.deletingFriend /* || props.crudStates.gettingSingleFriend */ ? 
            <p>Getting friends. Please wait. :)</p> 
        : props.crudStates.crudError !== null ? 
            <ErrorP>Friend {props.crudStates.crudError}</ErrorP>
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
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })).isRequired,
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
        deletedFriend: PropTypes.bool, 
        crudError: PropTypes.string
    }), 
    editHandler: PropTypes.func,
    deleteFriend: PropTypes.func, 
};

export default FriendsList;
