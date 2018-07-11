import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    const request = axios.get('http://localhost:5000/api/friends/');
    return dispatch => {
        dispatch({ type: FETCHED_FRIENDS });
        request.then(response => dispatch({ type: FETCHED_FRIENDS, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}