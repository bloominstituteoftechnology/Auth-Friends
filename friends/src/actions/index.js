import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const SAVED_FRIENDS = 'SAVED_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATED_FRIEND = 'UPDATED_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETED_FRIEND = 'DELETED_FRIEND';
export const ERROR = 'ERROR';

export const fetchingFriends = () => {
    const friendData = axios.get(`http://localhost:5000/api/friends`);
    return function(dispatch) {
        dispatch({ type: FETCHING_FRIENDS });
        friendData
        .then(response => {
            console.log(response);
            dispatch({ type: FETCHED_FRIENDS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    };
};

export const addFriend = friend => {
    const newFriendData = axios.post(`http://localhost:5000/api/friends`, friend);
    return function(dispatch) {
        newFriendData
        .then(response => {
            console.log(response);
            dispatch({ type: SAVED_FRIENDS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    };
};

export const updateFriend = friend => {
    const updateFriendData = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend);
    return function(dispatch) {
        updateFriendData
        .then(response => {
            console.log(response);
            dispatch({ type: UPDATING_FRIEND, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    };
};

export const deleteFriend = friend => {
    const deleteFriendData = axios.delete(`http://localhost:5000/api/friends/${friend.id}`);
    return function(dispatch) {
        deleteFriendData
        .then(response => {
            console.log(response);
            dispatch({ type: DELETING_FRIEND, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    };
};

