import axios from 'axios';
export const PENDING_FRIENDS = 'PENDING_FRIENDS';
export const SUCCESS_FRIENDS = 'SUCCESS_FRIENDS';
export const ERROR_FRIENDS = 'ERROR_FREINDS';

export const fetchFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: PENDING_FRIENDS });
        friends 
            .then(response => {
                console.log(response);
                dispatch({ type: SUCCESS_FRIENDS, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR_FRIENDS, payload: 'ERROR FETCHING FRIENDS' });
            });
    }
}

export const createFriend = data => {
    const friends = axios.post('http://localhost:5000/api/friends', data);
    return dispatch => {
        dispatch({ type: PENDING_FRIENDS });
        friends 
            .then(response => {
                console.log(response);
                dispatch({ type: SUCCESS_FRIENDS, payload: [] });
            })
            .catch(err => {
                dispatch({ type: ERROR_FRIENDS, payload: 'ERROR POSTING FRIENDS' });
            });
    }
}