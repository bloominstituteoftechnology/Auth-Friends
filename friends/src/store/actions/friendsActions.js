import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';


export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
        axios.get(`${baseUrl}/api/friends`)
            .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res}))
            .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err}))
}