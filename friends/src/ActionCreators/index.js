import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const FRIEND_CREATED = 'FRIEND_CREATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
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
    const newFriend = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: CREATING_FRIEND });
        newFriend
            .then(response => {
                dispatch({ type: FRIEND_CREATED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            });
    };
};

export const deleteFriend = friend => {
    const deletedFriend = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: DELETING_FRIEND });
        deletedFriend
            .then(response => {
                dispatch({ type: FRIEND_DELETED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            });
    };
};