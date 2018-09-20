import axios from 'axios';

export const FRIENDS_FETCH_START = 'FRIENDS_FETCH_START';
export const FRIENDS_FETCH_COMPLETE = 'FRIENDS_FETCH_COMPLETE';
export const FRIENDS_FETCH_FAIL = 'FRIENDS_FETCH_FAIL';

export const getFriends = () => dispatch => {
    dispatch({ type: FRIENDS_FETCH_START });
    const promise = axios.get('http://localhost:5000/api/friends');

    promise
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            dispatch({ type: FRIENDS_FETCH_FAIL, payload: err });
        })
};