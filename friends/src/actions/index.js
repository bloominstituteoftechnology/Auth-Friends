import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';

export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const OPEN_ALL = 'OPEN_ALL';
export const CLOSE_ALL = 'CLOSE_ALL';
export const SET_NAME = 'SET_NAME';

export const ERROR = 'ERROR';

export const getFriends = () => {
    const request = axios.get('http://localhost:5000/api/friends/');
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        request.then(response => dispatch({ type: FRIENDS_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

export const addFriend = friend => {
    const request = axios.post('http://localhost:5000/api/friends/', friend);
    return dispatch => {
        dispatch({ type: SAVING_FRIENDS })
        request.then(response => dispatch({ type: FRIENDS_SAVED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const editFriend = friend => {
    const request = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend);
    return dispatch => {
        dispatch({ type: UPDATING_FRIEND })
        request.then(response => dispatch({ type: FRIEND_UPDATED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const deleteFriend = id => {
    const request = axios.delete(`http://localhost:5000/api/friends/${id}`);
    return dispatch => {
        dispatch({ type: DELETING_FRIEND })
        request.then(response => dispatch({ type: FRIEND_DELETED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const setName = value => {
    return {
        type: SET_NAME,
        payload: value
    }
}

export const openAll = () => {
    return {
        type: OPEN_ALL
    }
}

export const closeAll = () => {
    return {
        type: CLOSE_ALL
    }
}