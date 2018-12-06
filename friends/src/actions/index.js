import axios from 'axios';
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH});
    console.log('fetched');
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err });
        })
}