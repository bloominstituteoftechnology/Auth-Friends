import axios from 'axios';

export const ADDING_FRIENDS= 'ADDING_FRIENDS';
export const EXFRIEND= 'EXFRIEND';
export const ERROR_ADDING_FRIENDS = 'ERROR_ADDING_FRIENDS';

export const addingFriends = friend => {
    return {
        type: ADDING_FRIENDS, payload: friend
    };
};

export const exFriend = friendId => {
    return {
        type: EXFRIEND, payload: friendId
    };
};

export const errorAddingFreinds = () => {
    return {
        type: ERROR_ADDING_FRIENDS
    };
};