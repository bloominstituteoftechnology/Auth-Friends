import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => {
    const request = axios.get('http://localhost:5000/api/friends/');
    return dispatch => {
        dispatch({ type: FRIENDS_FETCHED });
        request.then(response => dispatch({ type: FRIENDS_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}