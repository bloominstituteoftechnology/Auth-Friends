import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';

export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';

export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';

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
    console.log(friend);
    const request = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend);
    return dispatch => {
        dispatch({ type: UPDATING_FRIEND })
        request.then(response => dispatch({ type: FRIEND_UPDATED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}