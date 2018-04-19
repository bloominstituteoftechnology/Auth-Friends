import axios from 'axios';
export const PENDING_FRIENDS = 'PENDING_FRIENDS';
export const SUCCESS_FRIENDS = 'SUCCESS_FRIENDS';
export const ERROR_FRIENDS = 'ERROR_FREINDS';

export const fetchFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        friends 
            .then(response => {
                console.log(response);
                dispatch({ type: SUCCESS_FETCHING_FRIENDS, payload: []});
            })
            .catch(err => {
                dispatch({ type: ERROR_FETCHING_FRIENDS, payload: 'ERROR FETCHING FRIENDS' });
            });
    }
}

export const fetchFriends = data => {
    const friends = axios.post('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: POSTING_FRIEND });
        friends 
            .then(response => {
                console.log(response);
                dispatch({ type: SUCCESS_POSTING_FRIEND, payload: []});
            })
            .catch(err => {
                dispatch({ type: ERROR_POSTING_FRIENDS, payload: 'ERROR POSTING FRIENDS' });
            });
    }
}