import axios from 'axios';

export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';


const getFriends = () => {
    const request = axios.get('http://localhost:5000/api/friends/');
    return dispatch => {
        dispatch({ type: FRIENDS_FETCHED });
        request
            .then(response => dispatch({ type: FRIENDS_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err }))
    }
}

export default getFriends;