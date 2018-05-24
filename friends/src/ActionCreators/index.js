import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const FRIEND_CREATED = 'FRIEND_CREATED';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const SINGLE_FRIEND = 'SINGLE_FRIEND';
export const TOGGLE_UPDATE_FRIEND = 'TOGGLE_UPDATE_FRIEND';
export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/friends';

export const fetchFriends = () => {
    const friends = axios.get(`${URL}/fetch`);
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        friends
            .then(response => {
                dispatch({ type: FRIENDS_FETCHED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};

export const createFriend = friend => {
    const newFriend = axios.post(`${URL}/create`, friend);
    return dispatch => {
        dispatch({ type: CREATING_FRIEND });
        newFriend
            .then(({ data }) => {
                dispatch({ type: FRIEND_CREATED, payload: data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            });
    };
};

export const deleteFriend = id => {
    const deletedFriend = axios.delete(`${URL}/delete`, {
        data: { id }
    });
    return dispatch => {
        dispatch({ type: DELETING_FRIEND });
        deletedFriend
            .then(({ data }) => {
                dispatch({ type: FRIEND_DELETED, payload: data });
                dispatch({ type: SINGLE_FRIEND, payload: {} });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};

export const toggleShowUpdate = () => {
    return {
        type: TOGGLE_UPDATE_FRIEND
    };
};

export const updateSingleFriend = friend => {
    return {
        type: SINGLE_FRIEND,
        payload: friend
    };
};